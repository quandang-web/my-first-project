# Nhật ký Prompt - Dự án Tái thiết TechBugs

## Tư duy phân nhánh & Git
- Câu hỏi: Nếu tôi đang code dở ở `feature/nav-bar` mà cần sửa lỗi ở `main`, tôi nên dùng lệnh gì?
- Trả lời: Sử dụng `git stash` để cất tạm thay đổi, `git checkout main` để sửa lỗi, sau đó `git checkout feature/nav-menu` và `git stash pop` để làm tiếp.

## Tư duy Semantic HTML
- Câu hỏi: Sự khác nhau giữa `<section>` và `<article>`?
- Trả lời: `<section>` là nhóm nội dung theo chủ đề (như chương sách), `<article>` là nội dung tự thân, có thể đứng độc lập (như một bài báo).

## Lịch sử commit
- main: Khởi tạo Legacy Code.
- feature/nav-bar: Chuyển menu sang cấu trúc <ul>, <li>.
- feature/semantic-content: Thay thẻ div bằng Semantic tags.
- main: Merge các nhánh.