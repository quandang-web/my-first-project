/**
 * HỆ THỐNG QUAN TRẮC WEATHERSYNC (REFRACTORED)
 */

const sensorData = [
  { id: "S1", temp: 32.5, humidity: 80 },
  { id: "S2", temp: null, humidity: 90 },
  { id: "S3", temp: 35.1, humidity: 75 },
  { id: "S4", temp: 40.2 },
  "Tôi là hacker, tôi gửi chuỗi thay vì object",
  { id: "S5", temp: 28.0, humidity: 60 },
];

function processWeatherData(dataList) {
  console.log("--- BẮT ĐẦU XỬ LÝ DỮ LIỆU ---");

  dataList.forEach((sensor, index) => {
    try {
      // ===== 1. VALIDATION CẤP 1: kiểm tra object =====
      if (
        typeof sensor !== "object" ||
        sensor === null ||
        Array.isArray(sensor)
      ) {
        throw new Error(`Dữ liệu không hợp lệ tại index ${index}`);
      }

      const { id, temp, humidity } = sensor;

      // ===== 2. VALIDATION CẤP 2: kiểm tra id =====
      if (!id) {
        throw new Error(`Thiếu ID cảm biến tại index ${index}`);
      }

      // ===== 3. VALIDATION CẤP 3: kiểm tra nhiệt độ =====
      if (typeof temp !== "number" || isNaN(temp)) {
        throw new Error(`Temp không hợp lệ cho sensor ${id}`);
      }

      // ===== 4. BUSINESS RULE: nhiệt độ bất thường =====
      if (temp < -50 || temp > 100) {
        throw new Error(`Nhiệt độ vượt ngưỡng vật lý tại sensor ${id}`);
      }

      // ===== 5. XỬ LÝ HỢP LỆ =====
      const formattedTemp = temp.toFixed(1);

      console.log(
        `✅ Sensor ${id}: ${formattedTemp}°C | Humidity: ${humidity ?? "N/A"}`,
      );
    } catch (error) {
      // ===== 6. ERROR HANDLING =====
      console.error(`❌ Lỗi cảm biến: ${error.message}`);
    } finally {
      // ===== 7. LUÔN CHẠY =====
      const safeId =
        sensor && typeof sensor === "object" && sensor.id
          ? sensor.id
          : "UNKNOWN";

      console.log(`ℹ️ Đã quét xong cảm biến: ${safeId}`);
    }
  });

  console.log("--- HOÀN THÀNH XỬ LÝ DỮ LIỆU ---");
}

processWeatherData(sensorData);
