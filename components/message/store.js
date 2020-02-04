const Model = require('./model');
/* connectionstring
 * mongodb+srv://m001-student:platzi-admin@sandbox-p8slk.mongodb.net/telegrom?retryWrites=true&w=majority 
*/

const addMessage = (message) => {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

const  getList = (filterUser) => {
  let filter = {}
  if (filterUser) {
    filter = { user: filterUser }
  }
  return Model.find(filter)
    .populate('user')
    .exec();
}

const updateTextMessage = (id, textMessage) => {
  return Model.findByIdAndUpdate({_id: id}, {message: textMessage});
}


const deleteMesage = (id) => {
  return Model.deleteOne({_id: id});
}
module.exports = {
  add: addMessage,
  list: getList,
  update: updateTextMessage,
  remove: deleteMesage
}