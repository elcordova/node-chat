const express = require('express');
const multer = require('multer');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');
const conf = require('../../config');

const upload = multer({
  dest: `public/${conf.filesRoute}/`,
});

router.get('/', (req, resp)=>{
  const filterMessages = req.query.chat;
  controller.getMessages(filterMessages)
    .then(messages => {
      response.success(resp, messages);
    })
    .catch(err =>{
      response.error(resp, 'Unexpected Error', 500);
    });
});
router.post('/', upload.single('file'), (req, resp)=>{
  console.log(req.file);
  controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then(createdUser => {
      console.log('here is success', createdUser);
      response.success(resp, createdUser);
    })
    .catch(error => {
      console.log('here is error', error);
      response.error(resp, error);
    });
});
router.patch('/:id', (req, resp) => {
  console.log(req.params.id);
  controller.updateMessage(req.params.id, req.body.text)
  .then(data => {
    response.success(resp, data, 200);
  }).catch(err =>{
    console.log(err);
    response.error(resp, err);
  });
});

router.delete('/:id', (req, resp) => {
  const id = req.params.id
  controller.deleteMessage(id)
  .then(data => {
    response.success(resp, `mensaje ${id} elimando`, 200);
  }).catch(err =>{
    console.log(err);
    response.error(resp, err);
  });
});
module.exports = router