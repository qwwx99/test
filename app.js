const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;

const app = express();

// JSON 바디파서 미들웨어 등록
app.use(bodyParser.json());

app.use(express.static("public"));

const rooms = new Set();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/createRoom", (req, res) => {
  const roomName = req.body.roomName;
  rooms.add(roomName);
  res.json({ success: true });
});

app.post("/deleteRoom", (req, res) => {
  const roomName = req.body.roomName;
  rooms.delete(roomName);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
