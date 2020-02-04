function success(resp, message, status = 200) {
  resp.status(status).send({
    'body': message,
    'error': '',
  })
} 

function error(resp, message, status = 500) {
  resp.status(status).send({
    'body': '',
    'error': message,
  })
}

module.exports = { success, error}
