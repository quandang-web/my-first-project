let employees = [
  { id: 1, name: "Nguyen Van A", salary: 1000 },
  { id: 2, name: "Tran Thi B", salary: 2000 },
  { id: 3, name: "Le Van C", salary: 1500 },
];

// DOM
const form = document.getElementById("employeeForm");
const nameInput = document.getElementById("empName");
const salaryInput = document.getElementById("empSalary");
const list = document.getElementById("employeeList");
const searchInput = document.getElementById("searchInput");
const totalSalaryEl = document.getElementById("totalSalary");

// Render danh sách
function renderEmployees(data) {
  list.innerHTML = "";

  if (data.length === 0) {
    list.innerHTML = `<li style="color:gray;">Không có dữ liệu</li>`;
    return;
  }

  data.map((emp) => {
    const li = document.createElement("li");
    li.className = "employee-item";

    li.innerHTML = `
            <span>${emp.name} - ${emp.salary} VNĐ</span>
            <button class="delete-btn" onclick="deleteEmployee(${emp.id})">Xóa</button>
        `;

    list.appendChild(li);
  });

  calculateTotalSalary(data);
}

// Thêm nhân viên
function handleAddEmployee(e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const salary = Number(salaryInput.value);

  if (!name || salary < 0) return;

  const newEmp = {
    id: Date.now(),
    name,
    salary,
  };

  employees.push(newEmp);

  nameInput.value = "";
  salaryInput.value = "";

  renderEmployees(employees);
}

// Xóa nhân viên
function deleteEmployee(id) {
  employees = employees.filter((emp) => emp.id !== id);
  renderEmployees(employees);
}

// Tìm kiếm realtime
function handleSearch() {
  const keyword = searchInput.value.toLowerCase().trim();

  const filtered = employees.filter((emp) =>
    emp.name.toLowerCase().includes(keyword),
  );

  renderEmployees(filtered);
}

// Tính tổng lương
function calculateTotalSalary(data) {
  const total = data.reduce((acc, emp) => {
    return acc + emp.salary;
  }, 0);

  totalSalaryEl.textContent = total;
}

// EVENTS
form.addEventListener("submit", handleAddEmployee);
searchInput.addEventListener("input", handleSearch);

// INIT
renderEmployees(employees);
