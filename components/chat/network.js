const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', (req, res) => {
  controller.addChat(req.body.users)
  .then(data => {
    response.success(res,data, 201);
  })
  .catch(err => {
    response.error(res, err, 500);
  });
});

router.get('/:userId', (req, res) => {
  controller.getChats(req.params.userId)
  .then(data => {
    response.success(res,data, 200);
  })
  .catch(err => {
    response.error(res, err, 500);
  });
});

module.exports = router