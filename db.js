const db = require('mongoose'); 

const connect = async (url) => {
  await db.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, promiseLibrary: global.Promise });
  console.log(`[db] connected`);
}

module.exports = connect;