// GateKeeper Security System

const employeeCode = prompt("Nhập mã nhân viên:");

/*
    prompt() trả về:
    - null nếu bấm Cancel
    - string nếu nhập (có thể là "" nếu không nhập gì)
*/

if (employeeCode === null || employeeCode.trim() === "") {
  alert("Truy cập bị từ chối");
} else {
  const confirmLogin = confirm(
    "Bạn có chắc chắn muốn sử dụng mã " + employeeCode + " để đăng nhập không?",
  );

  if (confirmLogin === true) {
    alert("Truy cập thành công!");
  } else {
    alert("Hủy đăng nhập");
  }
}
