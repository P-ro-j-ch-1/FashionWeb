# FashionWeb - Kubernetes Optimized

Website Bán Quần Áo Thời Trang (FashionWeb) là nền tảng thương mại điện tử hiện đại. Phiên bản này đã được tối ưu hóa để triển khai trên **Kubernetes** với đầy đủ hệ thống **Monitoring (Prometheus/Grafana)**, **Logging (ELK Stack)** và **Alerting (Telegram)**.

## 📖 Mục Lục
- [Tính Năng](#-tính-năng-nổi-bật)
- [Deployment (Triển Khai)](#-hướng-dẫn-triển-khai-deployment)
    - [Cách 1: Helm (Khuyên Dùng)](#cách-1-sử-dụng-helm-chart-khuyên-dùng)
    - [Cách 2: Manual (Thủ Công)](#cách-2-sử-dụng-kubectl-thủ-công)
- [Truy Cập](#-truy-cập-service)
- [Tiện Ích](#-tiện-ích-utility-scripts)

## 🚀 Tính năng nổi bật
*   **Microservices Ready:** Triển khai trên K8s với Backend, Frontend, Database riêng biệt.
*   **Centralized Logging:** Elasticsearch, Kibana, Filebeat thu thập log từ tất cả các pod.
*   **Monitoring:** Prometheus thu thập metrics, Grafana vẽ biểu đồ (CPU, RAM, Network).
*   **Alerting:** Cảnh báo qua Telegram khi hệ thống gặp sự cố.

---

## 🛠 Hướng Dẫn Triển Khai (Deployment)

Bạn có thể chọn 1 trong 2 cách dưới đây để triển khai.

### Cách 1: Sử Dung Helm Chart (Khuyên Dùng)
Helm giúp quản lý toàn bộ hệ thống chỉ với vài câu lệnh, không cần apply từng file thủ công.

#### 1. Chuẩn bị
*   Cài đặt Helm: `brew install helm`
*   **⚠️ Quan Trọng:** Nếu bạn từng deploy bằng tay (`kubectl apply`), hãy xoá sạch trước khi dùng Helm:
    ```bash
    kubectl delete -f k8s/
    ```

#### 2. Cài đặt (Install)
Chạy lệnh sau để deploy toàn bộ dự án (App + ELK + Monitor):
```bash
# Khởi động Minikube (nếu chưa)
./resume_project.sh

# Cài đặt Chart
helm install fashionweb ./charts/fashionweb
```

#### 3. Các lệnh quản lý khác
*   **Kiểm tra lỗi (Dry-run):**
    ```bash
    helm template fashionweb ./charts/fashionweb
    helm lint ./charts/fashionweb
    ```
*   **Nâng cấp (Upgrade):** Khi bạn sửa file config hoặc code:
    ```bash
    helm upgrade fashionweb ./charts/fashionweb
    ```
*   **Gỡ bỏ (Uninstall):**
    ```bash
    helm uninstall fashionweb
    ```

#### 4. Cấu hình (`values.yaml`)
Bạn có thể tùy chỉnh mọi thứ trong file `charts/fashionweb/values.yaml`:
*   **Image Tag:** Đổi version backend/frontend.
*   **Resources:** Chỉnh RAM/CPU cho Database/Elasticsearch.
*   **Ports:** Đổi port nếu bị trùng (mặc định NodePort từ 30000-30006).

---

### Cách 2: Sử Dụng Kubectl (Thủ Công)
Đây là cách truyền thống, apply từng file manifest trong thư mục `k8s/`.

1.  **Apply từng thành phần:**
    ```bash
    # Core
    kubectl apply -f k8s/namespace.yaml
    kubectl apply -f k8s/mysql-deployment.yaml
    kubectl apply -f k8s/backend-deployment.yaml
    kubectl apply -f k8s/frontend-deployment.yaml

    # ELK Stack & Monitoring (Xem chi tiết trong Deployment Guide)
    ```
    
2.  **Chi tiết từng bước:**
    Vui lòng đọc file hướng dẫn chi tiết:
    👉 **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)**

---

## 🌐 Truy Cập Service

Sau khi deploy xong (bằng bất kỳ cách nào), hãy chạy script sau để mở kết nối (Tunnel):

```bash
./start_tunnels.sh
```

| Service | URL | User/Pass |
|---|---|---|
| **Frontend** | [http://localhost:3001](http://localhost:3001) | |
| **Backend** | [http://localhost:3000](http://localhost:3000) | |
| **Kibana** | [http://localhost:5601](http://localhost:5601) | |
| **Prometheus** | [http://localhost:9090](http://localhost:9090) | |
| **Grafana** | [http://localhost:3002](http://localhost:3002) | `admin` / `admin` |

---

## ⚡️ Tiện Ích (Utility Scripts)

*   `./resume_project.sh`: Tự động bật Minikube và chờ pod sẵn sàng (dùng khi khởi động lại máy).
*   `./test_telegram_alert.sh`: Script test cảnh báo Telegram.
