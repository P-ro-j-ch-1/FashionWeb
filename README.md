# FashionWeb
# Website Bán Quần Áo Thời Trang (FashionWeb)

## 📖 Giới thiệu

Website Bán Quần Áo Thời Trang là nền tảng thương mại điện tử giúp người dùng dễ dàng xem, lựa chọn và mua sắm các sản phẩm thời trang như áo, quần, váy, phụ kiện…. Giao diện được thiết kế hiện đại, thân thiện và dễ sử dụng. Website hướng tới việc mang lại trải nghiệm mua sắm nhanh chóng – tiện lợi – an toàn cho khách hàng.

## 👥 Thông tin nhóm thực hiện

**Giảng viên hướng dẫn:** GV Hoàng Trọng Phúc 

| STT | Thành viên | Vai trò |
| :--- | :--- | :--- |
| 1 | Nguyễn Xuân Sáng | Project Manager  |
| 2 | Lê Văn Mạnh Hà | Backend  |
| 3 | Đoàn Thế Nam | Frontend  |
| 4 | Nguyễn Hùng Dũng | Tester  |
| 5 | Cao Quang Tiến | DevOps  |

## 🛠 Công nghệ sử dụng

* **Frontend:** ReactJs 
* **Backend:** NodeJs 
* **Database:** MySql 

## ✨ Chức năng

### 1. Quản trị viên (Admin)
* **Quản lý người dùng:** Thêm, sửa, xóa, phân quyền người dùng.
* **Quản lý sản phẩm & Danh mục:** Thêm, cập nhật, xóa sản phẩm và danh mục.
* **Quản lý kinh doanh:** Quản lý nhãn hàng , nhà cung cấp , nhập hàng , và đơn hàng.
* **Marketing:** Quản lý băng rôn , chủ đề , bài đăng.
* **Khuyến mãi:** Quản lý loại khuyến mãi  và chương trình khuyến mãi.
* **Chăm sóc khách hàng:** Quản lý và trả lời tin nhắn.
* **Thống kê:** Xem báo cáo thống kê về sản phẩm, người dùng, doanh thu.

### 2. Nhân viên
* **Đơn hàng:** Theo dõi và cập nhật tình trạng đơn hàng.
* **Kho:** Cập nhật thông tin nhà cung cấp , ghi nhận quá trình nhập hàng.
* **Giao tiếp:** Nhắn tin với admin, khách hàng hoặc nhà cung cấp.

### 3. Khách hàng
* **Tài khoản:** Quản lý thông tin cá nhân , địa chỉ giao hàng , xem lịch sử mua hàng.
* **Mua sắm:** Xem sản phẩm , thêm vào giỏ hàng (thêm, sửa, xóa) , đặt hàng và thanh toán online.
* **Tiện ích:** Xem tin tức , áp dụng mã khuyến mãi.
* **Tương tác:** Bình luận, đánh giá sản phẩm , nhắn tin với admin/nhân viên.

## 📂 Danh sách trang (Sitemap)
* Trang chủ, Trang sản phẩm, Chi tiết sản phẩm.
* Giỏ hàng, Thanh toán, Voucher.
* Tin tức, Đăng nhập/Đăng ký.
* Dashboard Admin, Trang nhân viên, Người dùng.

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
    

2.  **Cài đặt Database:**
    * Mở XAMPP, chọn **Start** ở Apache và MySQL.
    * Chọn **Admin** ở MySQL để mở công cụ quản lý.
    * Tạo Database mới tên là `fashionweb`.
    * Import file database `.sql` vào.

3.  **Cài đặt và chạy ứng dụng:**
    Mở terminal tại thư mục `FashionAPI` (Backend) và `Frontend` và chạy các lệnh sau:
    ```bash
    npm install
    npm start
    ```
    

## 🚀 Hướng dẫn Deploy

### Phần 1: Deploy Database lên Railway

1.  **Lấy thông tin kết nối:**
    * Truy cập Project trên Railway -> chọn service **MySQL** -> tab **Variables**.
    * Lấy các thông tin: `Host`, `Port`, `Username`, `Password`, `Database Name` .

2.  **Kết nối MySQL Workbench:**
    * Mở MySQL Workbench, tạo kết nối mới (`+`).
    * Điền thông tin Host, Port, Username, Password lấy từ Railway và đặt tên connection (VD: Railway DB) .
    * Test Connection và lưu lại.

3.  **Deploy SQL:**
    * Mở kết nối Railway DB vừa tạo.
    * Vào `File` -> `Open SQL Script...` chọn file `.sql` của bạn.
    * Nhấn biểu tượng **Tia sét** (Execute) để chạy file.
    * *(Hoặc dùng Data Import/Restore trong tab Administration)* .

### Phần 2: Deploy Backend lên Render

1.  **Chuẩn bị Code:**
    * Sửa port trong code: `const port = process.env.PORT || 3000;`.
    * Cấu hình DB đọc từ biến môi trường, không hard-code password.

2.  **Tạo Web Service:**
    * Truy cập Render -> `New +` -> `Web Service` -> Kết nối GitHub repo.
    * Build Command: `npm install` (hoặc tương tự).
    * Start Command: `node index.js` (hoặc `npm start`).

3.  **Thiết lập Environment Variables:**
    * Tại mục **Environment Variables**, thêm các biến lấy từ Railway: `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`, `DB_PORT` .
    * Nhấn **Create Web Service** và copy link backend sau khi build xong.

### Phần 3: Deploy Frontend lên Vercel

1.  **Chuẩn bị Code:**
    * Sử dụng biến môi trường cho API URL (VD: `import.meta.env.VITE_API_URL` với Vite), không để `localhost:3000` .

2.  **Tạo Project:**
    * Truy cập Vercel -> `Add New` -> `Project` -> Chọn repo Frontend.

3.  **Cấu hình Environment Variables:**
    * Thêm biến môi trường (VD: `VITE_API_URL`) với Value là link Backend Render vừa copy .
    * Nhấn **Deploy**.

---
**Tài liệu Test:** [Google Sheets Link](https://docs.google.com/spreadsheets/d/15HRXWOA6SC5XKYlgJzw4xoxmSKJiC4KK44y2tVmDNKg/edit?gid=0#gid=0) 
