const modal = document.getElementById("myModal");
const btn = document.getElementById("createRoomModalBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const createRoomBtn = document.getElementById("createRoomBtn");

createRoomBtn.addEventListener("click", () => {
  const roomName = document.getElementById("roomNameInput").value;
  fetch("/createRoom", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ roomName }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("방이 생성되었습니다.");
      } else {
        console.error("서버 오류 발생");
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
