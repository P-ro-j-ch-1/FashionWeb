# Hướng Dẫn Sử Dụng Hệ Thống Cảnh Báo (Alerting)

Hệ thống cảnh báo bao gồm:
1.  **Prometheus**: Giám sát metrics và đánh giá "Luật" (Rules). Nếu vi phạm luật, nó gửi cảnh báo tới Alertmanager.
2.  **Alertmanager**: Nhận cảnh báo, xử lý (gộp, lọc) và gửi đi (Email, Telegram, Slack...).

## 1. Truy Cập

*   **Prometheus (Tab Alerts):** [http://localhost:9090/alerts](http://localhost:9090/alerts)
    *   Xem trạng thái các luật cảnh báo (Xanh: OK, Vàng: Sắp báo, Đỏ: Đang báo).
*   **Alertmanager:** [http://localhost:9093](http://localhost:9093)
    *   Xem danh sách các cảnh báo đang kích hoạt (Firing).

## 2. Các Cảnh Báo Đã Cấu Hình

Trong file `k8s/prometheus-configmap.yaml`, chúng ta đã tạo sẵn 3 luật:

1.  **InstanceDown**: Báo động ngay nếu một máy/target bị chết hơn 1 phút. (Severity: Critical)
2.  **NodeHighCPU**: Báo nếu CPU dùng trên 80% trong 5 phút. (Severity: Warning)
3.  **NodeHighMemory**: Báo nếu RAM dùng trên 80% trong 5 phút. (Severity: Warning)

## 3. Cách Test (Thử Làm Giả Sự Cố) :

Tắt Backend: kubectl scale deployment backend -n fashionweb --replicas=0 -> Sẽ nhận Alert BackendMissing.
Bật lại: kubectl scale deployment backend -n fashionweb --replicas=1 -> Sẽ nhận Resolved (và Alert InstanceDown cũng sẽ biến mất).

Để thấy hệ thống hoạt động, hãy thử làm "sập" một pod giả định.

### Bước 1: Xem trạng thái "Bình Yên"
Truy cập [http://localhost:9090/alerts](http://localhost:9090/alerts). Bạn sẽ thấy dòng `InstanceDown` màu xanh lá cây (`0 active`).

### Bước 2: Tắt thử Node Exporter
Chúng ta sẽ xóa thử pod Node Exporter để Prometheus không thấy nó nữa.

```bash
# Lấy tên pod
kubectl get pods -n fashionweb -l app=node-exporter

# Giả sử tên là node-exporter-abcde, ta xóa nó
# (Lưu ý: Vì là DaemonSet nó sẽ tự tạo lại, nhưng sẽ có khoảng hở để test)
kubectl delete pod -n fashionweb -l app=node-exporter
```
*Lưu ý: DaemonSet phục hồi rất nhanh, có thể khó kích hoạt rule 1 phút. Cách tốt hơn là tắt tunnel hoặc chặn mạng, nhưng hơi phức tạp trên Minikube.*

**Cách chắc chắn hơn (Tạo Fake Alert):**
Bạn có thể sửa file config rule để test, ví dụ: "Báo động nếu có hơn 0 pod".

1.  Sửa `k8s/prometheus-configmap.yaml`:
    ```yaml
    - alert: TestAlert
      expr: vector(1)
      for: 10s
    ```
2.  Apply: `kubectl apply -f k8s/prometheus-configmap.yaml`
3.  Restart Prometheus: `kubectl rollout restart deployment/prometheus -n fashionweb`

### Bước 3: Xem Cảnh Báo "Nổ" (Firing)
1.  Quay lại [http://localhost:9090/alerts](http://localhost:9090/alerts).
2.  Bạn sẽ thấy Alert chuyển sang màu **Vàng (Pending)** rồi **Đỏ (Firing)**.
3.  Truy cập [http://localhost:9093](http://localhost:9093) (Alertmanager) sẽ thấy cảnh báo xuất hiện ở đó.

### 3.2 Cách Test Bằng Script (Nhanh Gọn)
Nếu bạn không muốn tắt/bật Pod, mình đã chuẩn bị sẵn một script để bắn tin nhắn test ngay lập tức:

```bash
./test_telegram_alert.sh
```
Bot sẽ gửi tin nhắn "Manual Test Alert" về Telegram của bạn.

## 4. Tích Hợp Thông Báo (Nâng Cao)
Hiện tại Alertmanager chỉ đang "hứng" lỗi. Để gửi ra ngoài (Telegram/Slack), bạn cần sửa file `k8s/alertmanager-configmap.yaml`.

Ví dụ Telegram:
```yaml
receivers:
- name: 'telegram-receiver'
  telegram_configs:
  - bot_token: 'YOUR_BOT_TOKEN'
    chat_id: YOUR_CHAT_ID
```
