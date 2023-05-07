const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// JSON 바디파서 미들웨어 등록
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/getData", (req, res) => {
  const data = req.body.data;
  res.json({ data: data });
});

app.listen(3000, () => {
  console.log("서버가 시작되었습니다.");
});
