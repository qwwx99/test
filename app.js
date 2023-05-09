const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const rooms = [];

// JSON 바디파서 미들웨어 등록
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/room", (req, res) => {
  res.sendFile(__dirname + "/views/room.html");
});

app.post("/room/create", (req, res) => {
  const roomName = req.body.roomName;

  // 방 생성 작업 수행
  const newRoom = { id: rooms.length + 1, name: roomName };
  rooms.push(newRoom);
  console.log(rooms);

  // 생성된 방 정보를 클라이언트에게 응답
  res.json({
    success: true,
    roomId: newRoom.id,
  });
});

var port = 3000;

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
