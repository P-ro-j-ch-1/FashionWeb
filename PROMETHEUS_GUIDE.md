# Hướng Dẫn Sử Dụng Prometheus (Basic)

**URL truy cập:** [http://localhost:9090](http://localhost:9090)

Prometheus chủ yếu được sử dụng để query (truy vấn) và debug dữ liệu metrics theo thời gian thực.

## 1. Kiểm Tra "Sức Khỏe" Hệ Thống (Targets)

Đây là bước đầu tiên để đảm bảo Prometheus đang lấy được dữ liệu.

1.  Từ menu trên cùng, chọn **Status** -> **Targets**.
2.  Bạn sẽ thấy danh sách các "Job" (các nguồn metrics):
    *   `kubernetes-nodes`: Metrics của các node máy ảo Minikube.
    *   `kubernetes-pods`: Metrics của các pod (Node Exporter, v.v.).
    *   `prometheus`: Metrics của chính Prometheus.
3.  **State** phải là màu xanh (**UP**). Nếu là **DOWN**, có nghĩa là Prometheus không kết nối được tới service đó.

## 2. Truy Vấn Metrics (Graph)

Đây là nơi bạn chạy các lệnh **PromQL** để xem biểu đồ.

1.  Bấm vào **Graph** trên menu.
2.  Nhập câu lệnh vào ô tìm kiếm và bấm **Execute**.
3.  Chuyển tab từ **Table** (xem giá trị hiện tại) sang **Graph** (xem biểu đồ thời gian).

### Các Câu Lệnh (PromQL) Thông Dụng

Với hệ thống hiện tại (đã cài Node Exporter), bạn có thể thử ngay các lệnh sau:

#### CPU Usage (Của Node)
Xem tỉ lệ CPU đang bận rộn (tính theo %):
```promql
100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[1m])) * 100)
```

#### RAM Usage
Xem lượng RAM đang dùng (Bytes):
```ory_MemTpromql
node_memotal_bytes - node_memory_MemAvailable_bytes
```

#### Network Traffic
Tốc độ nhận (Download) trên tất cả các card mạng:
```promql
rate(node_network_receive_bytes_total[1m])
```

#### Kubernetes Pods
Xem số lượng Go goroutines trong các pod (ví dụ Prometheus hay các ứng dụng Go):
```promql
go_goroutines
```

## 3. Auto-complete
Prometheus UI có tính năng gợi ý. Khi bạn gõ `node_`, nó sẽ hiện ra danh sách tất cả các metrics bắt đầu bằng `node_`. Hãy thử khám phá!

## 4. Grafana vs Prometheus
*   **Prometheus UI**: Tốt cho việc debug nhanh, viết query thử nghiệm.
*   **Grafana** ([http://localhost:3002](http://localhost:3002)): Đẹp hơn, dùng để theo dõi lâu dài (Dashboard). Bạn nên copy các câu lệnh PromQL hay ở đây và dán vào Grafana để vẽ biểu đồ đẹp.
