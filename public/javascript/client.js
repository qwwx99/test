const roomModal = document.getElementById("room-modal");
const roomModalClose = document.getElementById("room-modal-close");

var createBtn = document.getElementById("create-room");

createBtn.addEventListener("click", createRoomModal);

function createRoomModal() {
  roomModal.style.display = "block"; // 모달창 띄우기
}

roomModalClose.onclick = function () {
  roomModal.style.display = "none"; // 모달창 닫기
};

var deleteBtn = document.getElementById("delete-room");

deleteBtn.addEventListener("click", deleteRoom);

const roomCreateButton = document.getElementById("room-create-button");

roomCreateButton.addEventListener("click", createRoom);

function createRoom() {
  const roomName = document.getElementById("room-name").value;
  // 방 생성 기능
  alert(`새로운 ${roomName} 방을 생성합니다.`);
  roomModal.style.display = "none"; // 모달창 닫기
}

function deleteRoom() {
  // 방 삭제 기능
  alert("선택한 방을 삭제합니다.");
}
