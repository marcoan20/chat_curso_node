const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    console.log(msg)
    io.emit('message', msg);
  });
});

var port = process.env.PORT || 3000;

http.listen(port, function () {
  console.log('servidor no ar');
});
