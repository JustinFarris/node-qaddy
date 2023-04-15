// app.js
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

io.on('connection', (socket) => {
  socket.on('addItem', (data) => {
    io.emit('addItem', data);
  });

  socket.on('sortList', (data) => {
    io.emit('sortList', data);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
