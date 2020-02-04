const store = require('./store');
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
      fileUrl = `http://localhost:3000/app/files/${file.filename}`;
    }
    
    const fullUser = {
      chat, user, message, date: new Date(), file: fileUrl
    }
    store.add(fullUser);
    resolve(fullUser);
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