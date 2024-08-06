const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
const http = require('http');
const socketIo = require('socket.io');

// sets up the Express App
const app = express();
// sets the environment variable PORT to tell the web server what port to listen on
const PORT = process.env.PORT || 3001;

// serves up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// configures body parser for AJAX requests and
// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// enable CORS
app.use(cors());

// adds routes, both API and view
app.use(routes);

// requires models for syncing
const db = require("./models");

// integrates socket.io
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// listens on the connection event for incoming sockets, and logs it to the console
io.on('connection', (socket) => {
  console.log('a user connected');
  // listens on 'checkIn' event
  socket.on('checkIn', (id) => {
    console.log('checked in into workshop: ' + id);
    // sends id to everyone except for a certain socket
    // uses broadcast flag
    socket.broadcast.emit('checkedIn', id);
  });
  // socket.on('disconnect', () => {
  //   console.log('Got disconnect!');
  // });
});

// syncs the sequelize models and then connects the Express app
db.sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
