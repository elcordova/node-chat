const express = require('express');
const bodyParser = require('body-parser');
// const router = require('./components/message/network');
const router = require('./network/routes');
const conect = require('./db');
conect('mongodb://m001-student:platzi-admin@sandbox-shard-00-00-p8slk.mongodb.net:27017,sandbox-shard-00-01-p8slk.mongodb.net:27017,sandbox-shard-00-02-p8slk.mongodb.net:27017/telegrom?ssl=true&replicaSet=Sandbox-shard-0&authSource=admin&retryWrites=true&w=majority');
const port = 3000;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
router(app);
app.use('/app', express.static('./public'));
app.listen(port);
console.log(`la aplicacion esta escuchando en localhost:${port}`);