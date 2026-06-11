let cart = [];

// DOM
const form = document.getElementById("orderForm");
const nameInput = document.getElementById("foodName");
const priceInput = document.getElementById("foodPrice");
const cartList = document.getElementById("cartList");
const totalPriceEl = document.getElementById("totalPrice");
const checkoutBtn = document.getElementById("checkoutBtn");

/* =========================
   RENDER FUNCTION (DOM UPDATE)
========================= */
function renderCart() {
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
            <span>${item.name} - ${item.price} VNĐ</span>
            <button class="delete-btn" data-index="${index}">X</button>
        `;

    cartList.appendChild(li);
  });

  updateTotal();
}

/* =========================
   TOTAL PRICE
========================= */
function updateTotal() {
  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
  totalPriceEl.textContent = total;
}

/* =========================
   FORM EVENT - ADD ITEM
========================= */
form.addEventListener("submit", (e) => {
  e.preventDefault(); // chặn reload

  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  if (!name || price <= 0) return;

  cart.push({ name, price });

  nameInput.value = "";
  priceInput.value = "";

  renderCart();
});

/* =========================
   EVENT DELEGATION - DELETE ITEM
========================= */
cartList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const index = e.target.getAttribute("data-index");
    cart.splice(index, 1);
    renderCart();
  }
});

/* =========================
   KEYBOARD EVENTS
========================= */
document.addEventListener("keydown", (e) => {
  // ENTER = thanh toán
  if (e.key === "Enter") {
    if (cart.length === 0) {
      alert("Giỏ hàng trống!");
      return;
    }
    alert("Thanh toán thành công!");
    cart = [];
    renderCart();
  }

  // ESC = xóa giỏ
  if (e.key === "Escape") {
    cart = [];
    renderCart();
    alert("Đã xóa toàn bộ giỏ hàng");
  }
});

/* =========================
   CHECKOUT BUTTON
========================= */
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Giỏ hàng trống!");
    return;
  }
  alert("Thanh toán thành công!");
  cart = [];
  renderCart();
});
