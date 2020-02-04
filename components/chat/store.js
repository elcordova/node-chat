const Model = require('./model');

const getChats = (userId) => {
  let filter = {};
  if (userId) {
    filter = { users: userId };
  }

  return Model.find(filter)
    .populate('users')
    .exec();
}

const addChat = (chat) => {
  return new Model(chat).save();
}

module.exports = {
  list: getChats,
  add: addChat
}