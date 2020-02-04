const Model = require('./model');

const addUser = (user) => {
  const myUser = new Model(user);
  return myUser.save();
}

const getUsers = (filterName) => {
  let query = {}
  if (filterName) {
    query = {name: filterName}
  }
  console.log(query);
  return Model.find(query);
}

module.exports = {
  add: addUser,
  list: getUsers,
}