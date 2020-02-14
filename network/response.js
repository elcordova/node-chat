const statusMessage = {
  '200': 'Done',
  '201': 'Created',
  '400': 'Invalid Format',
  '500': 'Internal Error',
}

function getDefaultMessage(message, status) {
  if (!message) {
    return statusMessage[status];    
  }
  return message;
}

function success(resp, message, status = 200) {
  let statusMessage = getDefaultMessage(message,status);
  resp.status(status).send({
    'body': statusMessage,
    'error': '',
  });
} 

function error(resp, message, status = 500) {
  let statusMessage = getDefaultMessage(message,status);
  resp.status(status).send({
    'body': '',
    'error': statusMessage,
  })
}

module.exports = { success, error}
