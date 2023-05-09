const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const rooms = new Map();

// JSON 바디파서 미들웨어 등록
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

var port = 3000;

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
