# FashionWeb - Kubernetes Optimized

## 📖 Giới thiệu

Website Bán Quần Áo Thời Trang (FashionWeb) là nền tảng thương mại điện tử hiện đại. Phiên bản này đã được tối ưu hóa để triển khai trên **Kubernetes** với đầy đủ hệ thống **Monitoring (Prometheus/Grafana)**, **Logging (ELK Stack)** và **Alerting (Telegram)**.

## 🚀 Tính năng nổi bật

*   **Microservices Ready:** Triển khai trên K8s với Backend, Frontend, Database riêng biệt.
*   **Centralized Logging:** Elasticsearch, Kibana, Filebeat thu thập log từ tất cả các pod.
*   **Monitoring:** Prometheus thu thập metrics, Grafana vẽ biểu đồ (CPU, RAM, Network).
*   **Alerting:** Cảnh báo qua Telegram khi hệ thống gặp sự cố (Server Down, High Load).

## 🛠 Công nghệ

*   **Application:** ReactJS, NodeJS, MySQL.
*   **Infrastructure:** Kubernetes (Minikube), Docker.
*   **DevOps Stack:**
    *   **Logging:** Elasticsearch, Kibana, Filebeat.
    *   **Monitoring:** Prometheus, Node Exporter, Grafana.
    *   **Alerting:** Alertmanager (Telegram Integration).


## 📚 Hướng Dẫn Triển Khai (Deployment Guide)

Để xem hướng dẫn chi tiết cách cài đặt và chạy dự án này trên Kubernetes, vui lòng xem các tài liệu sau:

### [👉 HƯỚNG DẪN DEPLOY CHI TIẾT (DEPLOYMENT_GUIDE.md)](DEPLOYMENT_GUIDE.md)
*(Đây là tài liệu chính, bao gồm tất cả các bước từ cài đặt môi trường đến deploy full stack)*

### Các tài liệu phụ trợ:
*   [Hướng dẫn Prometheus (Query Metrics)](PROMETHEUS_GUIDE.md)
*   [Hướng dẫn Grafana (Dashboards)](GRAFANA_GUIDE.md)
*   [Hướng dẫn Alerting (Cấu hình cảnh báo)](ALERTING_GUIDE.md)

---

## ⚡️ Chạy nhanh (Quick Start)

Nếu bạn đã cài sẵn Docker & Minikube:

1.  **Clone code:**
    ```bash
    git clone https://github.com/P-ro-j-ch-1/FashionWeb.git
    cd FashionWeb
    ```

2.  **Chạy script deploy:**
    *(Lưu ý: Bạn cần update `k8s/alertmanager-configmap.yaml` với Telegram Token của bạn trước nếu muốn dùng Alert)*
    ```bash
    ./resume_project.sh
    ```

3.  **Truy cập:**
    Chạy script tạo tunnel để truy cập các dịch vụ:
    ```bash
    ./start_tunnels.sh
    ```
