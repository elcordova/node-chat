const store = require('./store');
const {socket} = require('../../socket');
const config = require('../../config');

const addMessage = (chat, user, message, file) => {
  return new Promise((resolve, reject)=>{
    console.log(user, message, (!user || !message));
    if (!chat || !user || !message) {
      console.log('has not been message or user')
      reject('error interno');
      return false;
    }
    let fileUrl = '';
    if (file) {
      fileUrl = `http://localhost:${config.port}/${config.publicRoute}/files/${file.filename}`;
    }
    
    const fullMessage = {
      chat, user, message, date: new Date(), file: fileUrl
    }
    store.add(fullMessage);

    socket.io.emit('message', fullMessage);

    resolve(fullMessage);
  });
}

const getMessages = (filter) => {
  return new Promise((resolve, reject)=>{
    resolve(store.list(filter));
  });
}

const updateMessage = (id, message) => {
  console.log(id, message);
  return new Promise((resolve, reject)=> {
    if (!id || !message) {
      reject('Invalid Data');
      return false;
    }
    resolve(store.update(id, message))
  });
}

const deleteMessage = (id) => {
  return new Promise((resolve, reject)=>{
    if (!id) {
      reject('parametros invalidos');
      return false;
    }
    resolve(store.remove(id))
  })
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
}