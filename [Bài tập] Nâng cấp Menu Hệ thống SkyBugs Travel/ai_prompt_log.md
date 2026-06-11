# AI Prompt Log

## Thông tin bài thực hành

* Dự án: SkyBugs Travel
* Bài tập: Nâng cấp Menu Hệ thống SkyBugs Travel
* Học viên: Đặng Minh Quân

---

## Prompt 1

**Người dùng hỏi:**
Khi nào nên sử dụng thẻ `<ul>` và khi nào nên sử dụng thẻ `<ol>` trong HTML?

**AI trả lời tóm tắt:**

* `<ul>` dùng cho danh sách không có thứ tự.
* `<ol>` dùng cho danh sách có thứ tự hoặc các bước thực hiện.
* Menu điều hướng website thường sử dụng `<ul>`.

---

## Prompt 2

**Người dùng hỏi:**
Làm thế nào để tạo một nhánh mới trong Git và chuyển sang nhánh đó?

**AI trả lời tóm tắt:**
Sử dụng lệnh:

```bash
git checkout -b feature/refactor-menu
```

Lệnh này vừa tạo nhánh mới vừa chuyển sang nhánh đó.

---

## Prompt 3

**Người dùng hỏi:**
Lệnh `git log --oneline --graph --all` có tác dụng gì?

**AI trả lời tóm tắt:**

* Hiển thị lịch sử commit dưới dạng ngắn gọn.
* Vẽ sơ đồ các nhánh Git bằng ký tự ASCII.
* Hiển thị toàn bộ commit của tất cả các nhánh.

---

## Prompt 4

**Người dùng hỏi:**
Fast-forward merge là gì?

**AI trả lời tóm tắt:**
Fast-forward merge xảy ra khi nhánh chính không có commit mới kể từ lúc tách nhánh. Git chỉ cần di chuyển con trỏ nhánh chính đến commit mới nhất của nhánh feature mà không cần tạo commit merge.

---

## Prompt 5

**Người dùng hỏi:**
Tại sao phải commit mã nguồn gốc trên nhánh main trước khi tạo nhánh feature?

**AI trả lời tóm tắt:**
Vì Git tạo nhánh dựa trên commit hiện tại. Commit đầu tiên giúp lưu lại trạng thái ban đầu của dự án và tạo điểm xuất phát rõ ràng cho các nhánh phát triển sau này.
