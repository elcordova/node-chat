const sockertIO = require('socket.io');
const socket = {};
function connect(server) {
    socket.io = sockertIO(server);
}

module.exports = {
    connect, socket
}