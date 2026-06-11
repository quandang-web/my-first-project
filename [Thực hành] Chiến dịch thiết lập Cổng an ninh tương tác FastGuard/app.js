// Hỏi tên người chơi
let playerName = prompt("Chào mừng đến với HeroQuest! Nhập tên của bạn:");

// Xử lý Cancel hoặc chuỗi rỗng
if (playerName === null || playerName.trim() === "") {
  alert("Bạn chưa nhập tên hoặc đã hủy!");
} else {
  alert("Chào " + playerName);
}

// Kiểm tra độ tuổi
let isAdult = confirm("Bạn đã đủ 18 tuổi chưa?");

if (isAdult) {
  alert("Chúc bạn chơi game vui vẻ!");
} else {
  alert("Từ chối truy cập: Bạn chưa đủ 18 tuổi.");
}
