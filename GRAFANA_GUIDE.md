# Hướng Dẫn Sử Dụng Grafana (Basic)

**URL truy cập:** [http://localhost:3002](http://localhost:3002)
**Tài khoản mặc định:** `admin` / `admin`

Grafana dùng để vẽ biểu đồ đẹp và chuyên nghiệp từ dữ liệu Prometheus.

## 1. Kiểm Tra Datasource

Hệ thống đã tự động cấu hình Prometheus làm "nguồn dữ liệu" (Datasource). Bạn có thể kiểm tra:

1.  Đăng nhập vào Grafana.
2.  Menu trái > **Connections** > **Data sources**.
3.  Bạn sẽ thấy **Prometheus** (màu cam).
4.  Bấm vào nó -> Kéo xuống dưới cùng và bấm **Safe & Test**.
    *   Nếu hiện màu xanh: *"Successfully queried the Prometheus API"* -> OK!

## 2. Cách Import Dashboard Có Sẵn (Nhanh Nhất)

Cộng đồng Grafana đã chia sẻ hàng ngàn dashboard mẫu. Với **Node Exporter** đã cài, chúng ta có thể dùng mẫu ID `1860`.

1.  Menu trái > **Dashboards** > **New** > **Import**.
2.  Ở ô **Import via grafana.com**, nhập số: `1860`
3.  Bấm **Load**.
4.  Ở phần **Options**:
    *   **Name**: Đặt tên (ví dụ: Node Exporter Full).
    *   **Prometheus**: Chọn datasource **Prometheus** (đã có sẵn).
5.  Bấm **Import**.

**Kết quả:** Bạn sẽ có ngay một dashboard cực kỳ chi tiết về CPU, RAM, Disk, Network của máy ảo Minikube mà không cần phải tự vẽ từng biểu đồ!

## 3. Cách Tự Tạo Dashboard (Thủ Công)

1.  Menu trái > **Dashboards** > **New** > **New Dashboard**.
2.  Bấm **+ Add visualization**.
3.  Chọn **Prometheus**.
4.  Ở phần query, nhập lệnh PromQL (giống như bên Prometheus).
    *   Ví dụ CPU: `100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[1m])) * 100)`
5.  Bấm **Run queries** để xem thử.
6.  Cột bên phải (Panel options): Đặt tên biểu đồ, chọn kiểu (Time series, Bar chart, Gauge...).
7.  Bấm **Apply** (góc trên phải) để lưu Panel này vào Dashboard.
8.  Bấm biểu tượng **Save** (đĩa mềm) để lưu Dashboard.

## 4. Mẹo
*   Grafana đẹp hơn Prometheus rất nhiều, hãy dùng nó để "khoe" hoặc theo dõi hàng ngày.
*   Dùng Prometheus UI để test lệnh cho đúng trước, rồi copy lệnh đó vào Grafana.
