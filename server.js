const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config();


// Whenever someone connects this gets executed
io.on('connection', (socket) => {
  console.log(socket.id + ' connected');

  // Whenever someone disconnects this piece of code executed
  socket.on('disconnect', () => {
     console.log(socket.id +' disconnected');
  });
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/segment', (req, res) => {
  return res.status(200).json({
    message: 'hello new project',
    response: req.body
  })
});

app.post('/segment', (req, res) => {

  // emit segment data via socket.io
  io.emit('segment', {
    request: req.body
  });

  return res.status(200).json({
    request: req.body,
    message: 'salut de la Geani'
  })
});

http.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});