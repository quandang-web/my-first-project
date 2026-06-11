const canvas = document.getElementById("radarCanvas");
const ctx = canvas.getContext("2d");

// DATA LỖI (giả lập API bẩn)
let flights = [
  { id: "VN11", x: 150, y: 200, speed: 2, color: "lime" },
  { id: "JS404", x: null, y: "ba trăm", speed: 1 },
  { id: "US55", x: 400, y: 150, speed: 3, color: "lime" },
  null,
  { id: "ER99" },
  { id: "CN77", x: Infinity, y: 120, speed: 2 },
];

// ===============================
// CLEAN DATA (PHỄU LỌC AN TOÀN)
// ===============================
function cleanData(data) {
  return data.filter((f) => {
    if (!f) return false;
    if (typeof f.x !== "number" || typeof f.y !== "number") return false;
    if (!isFinite(f.x) || !isFinite(f.y)) return false;
    return true;
  });
}

// ===============================
// RENDER RADAR
// ===============================
let cleanedFlights = cleanData(flights);

function drawRadar() {
  try {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    cleanedFlights.forEach((flight) => {
      ctx.beginPath();
      ctx.arc(flight.x, flight.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = flight.color || "lime";
      ctx.fill();

      // label
      ctx.fillText(flight.id, flight.x + 8, flight.y - 8);
    });
  } catch (err) {
    console.warn("Radar render error handled:", err);
  }
}

// ===============================
// ANIMATION LOOP
// ===============================
function loop() {
  drawRadar();

  // fake motion
  cleanedFlights.forEach((f) => {
    f.x += (Math.random() - 0.5) * f.speed;
    f.y += (Math.random() - 0.5) * f.speed;
  });

  requestAnimationFrame(loop);
}

// ===============================
// CLICK DETECTION
// ===============================
canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  cleanedFlights.forEach((flight) => {
    const dx = flight.x - mouseX;
    const dy = flight.y - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 8) {
      flight.color = "red";
      console.warn("⚠ Flight detected:", flight.id);
    }
  });
});

// START
loop();
