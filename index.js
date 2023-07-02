//npm install express --save
const express = require("express");
const http = require("http");
//npm install body-parser --save
const bodyParser = require("body-parser");
const cors = require('cors');
const io = require('socket.io');
const app = express();
const server = http.createServer(app)
const { Server } = io
const ioServer = new Server(server, { cors: { origin: '*' } })

app.use(cors());
// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Simple Api." });
});
require("./app/routes/customer.route")(app);

ioServer.on('connection', function (socket) {
  socket.on('disconnect', function(){
    console.log('disconnect')
  });
  socket.on("connect", () => {
    console.log('connect')
  });
});

// set port, listen for requests
server.listen(3001, () => {
  console.log("Server is running on port 3001.");
});