# FashionWeb
# Website Bán Quần Áo Thời Trang (FashionWeb)

## 📖 Giới thiệu

[cite_start]Website Bán Quần Áo Thời Trang là nền tảng thương mại điện tử giúp người dùng dễ dàng xem, lựa chọn và mua sắm các sản phẩm thời trang như áo, quần, váy, phụ kiện…[cite: 2]. [cite_start]Giao diện được thiết kế hiện đại, thân thiện và dễ sử dụng[cite: 2]. [cite_start]Website hướng tới việc mang lại trải nghiệm mua sắm nhanh chóng – tiện lợi – an toàn cho khách hàng[cite: 3].

## 👥 Thông tin nhóm thực hiện

[cite_start]**Giảng viên hướng dẫn:** GV Hoàng Trọng Phúc [cite: 70]

| STT | Thành viên | Vai trò |
| :--- | :--- | :--- |
| 1 | Nguyễn Xuân Sáng | [cite_start]Project Manager [cite: 65] |
| 2 | Lê Văn Mạnh Hà | [cite_start]Backend [cite: 66] |
| 3 | Đoàn Thế Nam | [cite_start]Frontend [cite: 67] |
| 4 | Nguyễn Hùng Dũng | [cite_start]Tester [cite: 68] |
| 5 | Cao Quang Tiến | [cite_start]DevOps [cite: 69] |

## 🛠 Công nghệ sử dụng

* [cite_start]**Frontend:** ReactJs [cite: 37]
* [cite_start]**Backend:** NodeJs [cite: 38]
* [cite_start]**Database:** MySql [cite: 39]

## ✨ Chức năng

### 1. Quản trị viên (Admin)
* [cite_start]**Quản lý người dùng:** Thêm, sửa, xóa, phân quyền người dùng[cite: 6].
* [cite_start]**Quản lý sản phẩm & Danh mục:** Thêm, cập nhật, xóa sản phẩm và danh mục[cite: 7, 8].
* [cite_start]**Quản lý kinh doanh:** Quản lý nhãn hàng [cite: 9][cite_start], nhà cung cấp [cite: 16][cite_start], nhập hàng [cite: 17][cite_start], và đơn hàng[cite: 15].
* [cite_start]**Marketing:** Quản lý băng rôn [cite: 10][cite_start], chủ đề [cite: 11][cite_start], bài đăng[cite: 12].
* [cite_start]**Khuyến mãi:** Quản lý loại khuyến mãi [cite: 13] [cite_start]và chương trình khuyến mãi[cite: 14].
* [cite_start]**Chăm sóc khách hàng:** Quản lý và trả lời tin nhắn[cite: 18].
* [cite_start]**Thống kê:** Xem báo cáo thống kê về sản phẩm, người dùng, doanh thu[cite: 19].

### 2. Nhân viên
* [cite_start]**Đơn hàng:** Theo dõi và cập nhật tình trạng đơn hàng[cite: 21].
* [cite_start]**Kho:** Cập nhật thông tin nhà cung cấp [cite: 22][cite_start], ghi nhận quá trình nhập hàng[cite: 23].
* [cite_start]**Giao tiếp:** Nhắn tin với admin, khách hàng hoặc nhà cung cấp[cite: 24].

### 3. Khách hàng
* [cite_start]**Tài khoản:** Quản lý thông tin cá nhân [cite: 27][cite_start], địa chỉ giao hàng [cite: 26][cite_start], xem lịch sử mua hàng[cite: 28].
* [cite_start]**Mua sắm:** Xem sản phẩm [cite: 33][cite_start], thêm vào giỏ hàng (thêm, sửa, xóa) [cite: 31][cite_start], đặt hàng và thanh toán online[cite: 30].
* [cite_start]**Tiện ích:** Xem tin tức [cite: 34][cite_start], áp dụng mã khuyến mãi[cite: 29].
* [cite_start]**Tương tác:** Bình luận, đánh giá sản phẩm [cite: 32][cite_start], nhắn tin với admin/nhân viên[cite: 35].

## 📂 Danh sách trang (Sitemap)
* [cite_start]Trang chủ, Trang sản phẩm, Chi tiết sản phẩm[cite: 41, 42, 43].
* [cite_start]Giỏ hàng, Thanh toán, Voucher[cite: 44, 45, 46].
* [cite_start]Tin tức, Đăng nhập/Đăng ký[cite: 47, 48].
* [cite_start]Dashboard Admin, Trang nhân viên, Người dùng[cite: 49, 50, 51].

## 💻 Cài đặt và Chạy dự án (Local)

### Yêu cầu
* Git
* Node.js
* Xampp Control Panel (Apache & MySQL)

### Các bước thực hiện

1.  **Clone project:**
    ```bash
    git clone [https://github.com/P-ro-j-ch-1/FashionWeb.git](https://github.com/P-ro-j-ch-1/FashionWeb.git)
    ```
    [cite_start][cite: 53]

2.  **Cài đặt Database:**
    * [cite_start]Mở XAMPP, chọn **Start** ở Apache và MySQL[cite: 54, 55].
    * [cite_start]Chọn **Admin** ở MySQL để mở công cụ quản lý[cite: 56].
    * [cite_start]Tạo Database mới tên là `fashionweb`[cite: 57].
    * [cite_start]Import file database `.sql` vào[cite: 58].

3.  **Cài đặt và chạy ứng dụng:**
    Mở terminal tại thư mục `FashionAPI` (Backend) và `Frontend` và chạy các lệnh sau:
    ```bash
    npm install
    npm start
    ```
    [cite_start][cite: 60, 61]

## 🚀 Hướng dẫn Deploy

### Phần 1: Deploy Database lên Railway

1.  **Lấy thông tin kết nối:**
    * [cite_start]Truy cập Project trên Railway -> chọn service **MySQL** -> tab **Variables**[cite: 73, 74, 75].
    * [cite_start]Lấy các thông tin: `Host`, `Port`, `Username`, `Password`, `Database Name` [cite: 76-81].

2.  **Kết nối MySQL Workbench:**
    * [cite_start]Mở MySQL Workbench, tạo kết nối mới (`+`)[cite: 83, 84].
    * [cite_start]Điền thông tin Host, Port, Username, Password lấy từ Railway và đặt tên connection (VD: Railway DB) [cite: 85-90].
    * [cite_start]Test Connection và lưu lại[cite: 91].

3.  **Deploy SQL:**
    * [cite_start]Mở kết nối Railway DB vừa tạo[cite: 94].
    * [cite_start]Vào `File` -> `Open SQL Script...` chọn file `.sql` của bạn[cite: 95, 96].
    * [cite_start]Nhấn biểu tượng **Tia sét** (Execute) để chạy file[cite: 97].
    * [cite_start]*(Hoặc dùng Data Import/Restore trong tab Administration)* [cite: 98-103].

### Phần 2: Deploy Backend lên Render

1.  **Chuẩn bị Code:**
    * Sửa port trong code: `const port = process.env.PORT || [cite_start]3000;`[cite: 106, 107].
    * [cite_start]Cấu hình DB đọc từ biến môi trường, không hard-code password[cite: 108].

2.  **Tạo Web Service:**
    * [cite_start]Truy cập Render -> `New +` -> `Web Service` -> Kết nối GitHub repo[cite: 110, 111].
    * [cite_start]Build Command: `npm install` (hoặc tương tự)[cite: 113].
    * [cite_start]Start Command: `node index.js` (hoặc `npm start`)[cite: 114].

3.  **Thiết lập Environment Variables:**
    * [cite_start]Tại mục **Environment Variables**, thêm các biến lấy từ Railway: `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`, `DB_PORT` [cite: 116-122].
    * [cite_start]Nhấn **Create Web Service** và copy link backend sau khi build xong[cite: 123, 124].

### Phần 3: Deploy Frontend lên Vercel

1.  **Chuẩn bị Code:**
    * [cite_start]Sử dụng biến môi trường cho API URL (VD: `import.meta.env.VITE_API_URL` với Vite), không để `localhost:3000` [cite: 127-130].

2.  **Tạo Project:**
    * [cite_start]Truy cập Vercel -> `Add New` -> `Project` -> Chọn repo Frontend[cite: 133, 134].

3.  **Cấu hình Environment Variables:**
    * [cite_start]Thêm biến môi trường (VD: `VITE_API_URL`) với Value là link Backend Render vừa copy [cite: 136-139].
    * [cite_start]Nhấn **Deploy**[cite: 140].

---
[cite_start]**Tài liệu Test:** [Google Sheets Link](https://docs.google.com/spreadsheets/d/15HRXWOA6SC5XKYlgJzw4xoxmSKJiC4KK44y2tVmDNKg/edit?gid=0#gid=0) [cite: 62]
