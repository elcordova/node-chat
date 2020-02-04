const store = require('./store');

const addUser = (name) => {
  console.log(name);
  if (!name) {
    return Promise.reject('Invalid name');
  }
  return store.add({name});
}

const getUsers = (query) => {
  return store.list(query);
}

module.exports = {
  addUser,
  getUsers
}