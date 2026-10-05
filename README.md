# CodeGym Career – Landing page

Trang landing page giới thiệu chương trình đào tạo lập trình viên Full-stack trong 20 tuần. Dự án được triển khai bằng HTML, CSS và JavaScript, sử dụng một số thư viện giao diện và hoạt ảnh qua CDN.

## Các tệp trong dự án

- `index.html`: cấu trúc nội dung và các thành phần của trang.
- `style.css`: màu sắc, bố cục và các tuỳ chỉnh giao diện.
- `script.js`: hiệu ứng cuộn trang và xử lý biểu mẫu đăng ký.

## Kỹ thuật được sử dụng

### HTML – `index.html`

- **HTML5 và ngôn ngữ tiếng Việt:** khai báo `<!DOCTYPE html>`, `lang="vi"`, mã hoá UTF-8 và viewport cho thiết bị di động.
- **Cấu trúc ngữ nghĩa:** sử dụng `header`, `nav`, `main`, `section` và `footer` để chia trang thành các khu vực rõ ràng.
- **Điều hướng nội trang:** các liên kết dùng fragment như `#lo-trinh` và `#dang-ky` để chuyển đến phần tương ứng.
- **Bootstrap và MDBootstrap:** tận dụng các lớp có sẵn cho lưới (`container`, `row`, `col-*`), nút, thẻ, navbar, carousel và biểu mẫu.
- **Carousel lời chứng thực:** dùng markup và thuộc tính `data-ride`, `data-slide` của Bootstrap để tạo trình chiếu có nút điều khiển.
- **Khả năng truy cập cơ bản:** có nhãn cho nút mở menu, `aria-label` cho liên kết biểu tượng, nội dung ẩn `sr-only` cho nút carousel và `role="status"` cho thông báo biểu mẫu.
- **Tải thư viện bên ngoài:** Bootstrap, MDBootstrap, jQuery, Popper, Font Awesome, Google Fonts, GSAP và ScrollTrigger được nạp qua CDN.

### CSS – `style.css`

- **CSS custom properties:** khai báo màu chủ đạo trong `:root` bằng `--navy` và `--orange` để tái sử dụng nhất quán.
- **Thiết kế responsive:** dùng media query cho màn hình nhỏ và `clamp()` để cỡ chữ tiêu đề Hero thay đổi theo kích thước màn hình.
- **Bố cục và trang trí:** áp dụng gradient cho Hero, bo tròn biểu tượng, đổ bóng cho thẻ và lộ trình, cùng hiệu ứng hover nâng thẻ.
- **Thanh tiến trình cuộn:** phần tử cố định phía trên màn hình được thu/phóng theo trục X; JavaScript điều khiển `scaleX`.
- **Cuộn mượt và vị trí neo:** `scroll-behavior: smooth` tạo cuộn mượt; `scroll-margin-top` giúp tiêu đề không bị navbar cố định che khuất.
- **Tôn trọng tuỳ chọn giảm chuyển động:** khi hệ điều hành bật `prefers-reduced-motion`, CSS tắt cuộn mượt.

### JavaScript – `script.js`

- **GSAP và ScrollTrigger:** đăng ký plugin để tạo hoạt ảnh theo vị trí cuộn.
- **Scroll-linked animation với `scrub`:** thanh tiến trình, nội dung Hero và các mục lộ trình thay đổi theo tiến độ cuộn; khi cuộn ngược, hoạt ảnh cũng chạy ngược.
- **Animation theo ngưỡng:** tiêu đề, thẻ lợi ích, carousel và biểu mẫu xuất hiện khi đi vào vùng nhìn thấy. `once: true` giới hạn một số hiệu ứng chỉ chạy một lần.
- **Điều chỉnh theo chuyển động của người dùng:** kiểm tra `prefers-reduced-motion` trước khi khởi tạo các hoạt ảnh GSAP. Phần kiểm tra biểu mẫu vẫn hoạt động bình thường.
- **Xử lý biểu mẫu phía trình duyệt:** chặn gửi mặc định, loại bỏ khoảng trắng thừa ở họ tên/email/số điện thoại, kiểm tra email và số điện thoại bằng biểu thức chính quy, hiển thị trạng thái thành công hoặc lỗi rồi đặt lại biểu mẫu nếu hợp lệ.

## Chạy thử

Mở `index.html` bằng trình duyệt. Dự án tải các thư viện và phông chữ từ CDN nên cần kết nối Internet để hiển thị đầy đủ giao diện và hiệu ứng.

Biểu mẫu hiện chỉ kiểm tra dữ liệu ở phía trình duyệt và hiển thị thông báo; chưa kết nối máy chủ hay gửi dữ liệu đăng ký đi đâu.
