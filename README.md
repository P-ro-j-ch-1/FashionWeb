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
    

    

