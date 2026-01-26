# Hướng Dẫn Deploy FashionWeb + Elasticsearch trên Kubernetes

Tài liệu này hướng dẫn chi tiết từng bước deploy toàn bộ hệ thống FashionWeb (MySQL, Backend, Frontend), ELK Stack (Log), và Monitoring (Prometheus, Grafana) lên Kubernetes (Minikube).

---

## Mục Lục
1. [Yêu Cầu & Cài Đặt](#1-yêu-cầu--cài-đặt)
2. [Khởi Động Cluster](#2-khởi-động-cluster)
3. [Build Docker Images](#3-build-docker-images)
4. [Deploy FashionWeb Core (DB, Backend, Frontend)](#4-deploy-fashionweb-core)
5. [Deploy Elasticsearch & Kibana](#5-deploy-elasticsearch--kibana)
6. [Deploy Monitoring (Prometheus & Grafana)](#6-deploy-monitoring-prometheus--grafana)
7. [Truy Cập Ứng Dụng](#7-truy-cập-ứng-dụng)
8. [Khởi Động Lại & Troubleshooting](#8-khởi-động-lại--troubleshooting)
9. [Tích Hợp Backend (Dành cho Dev)](#9-tích-hợp-backend-dành-cho-dev)

---

## 1. Yêu Cầu & Cài Đặt

### Phần cứng
- CPU: 2+ cores
- RAM: 4GB+ (khuyến nghị 8GB)
- Disk: 20GB trống

### Cài đặt (macOS)
```bash
brew install minikube kubectl
brew install --cask docker
```
> **Lưu ý:** Mở Docker Desktop trước khi tiếp tục.

---

## 2. Khởi Động Cluster

```bash
# Start Minikube
minikube start --driver=docker --memory=4096 --cpus=2

# Enable addons
minikube addons enable ingress
minikube addons enable metrics-server
```

---

## 3. Build Docker Images

Build image trực tiếp vào Minikube environment:

```bash
eval $(minikube docker-env)

# Backend
docker build -t fashionweb-backend:latest ./FashionAPI

# Frontend
docker build --build-arg REACT_APP_BACKEND_URL=http://localhost:3000 \
  -t fashionweb-frontend:latest ./Frontend
```

---

## 4. Deploy FashionWeb Core

### 4.1 Apply Resources
```bash
# Config & Secrets
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/secret.yaml

# Database
kubectl apply -f k8s/mysql-deployment.yaml
kubectl wait --for=condition=ready pod -l app=mysql -n fashionweb --timeout=120s

# Import Data
MYSQL_POD=$(kubectl get pods -n fashionweb -l app=mysql -o jsonpath='{.items[0].metadata.name}')
kubectl cp database/export.sql fashionweb/$MYSQL_POD:/tmp/export.sql
kubectl exec -n fashionweb $MYSQL_POD -- bash -c "mysql -u root -proot123 fashionweb < /tmp/export.sql"

# Apps
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml
```

---

## 5. Deploy Elasticsearch & Kibana

### 5.1 Deploy
```bash
# Elasticsearch & Kibana
kubectl apply -f k8s/elasticsearch-deployment.yaml
kubectl apply -f k8s/kibana-deployment.yaml

# Filebeat (Logs)
kubectl apply -f k8s/filebeat-daemonset.yaml

# Chờ khởi động
kubectl wait --for=condition=ready pod -l app=elasticsearch -n fashionweb --timeout=180s
kubectl wait --for=condition=ready pod -l app=kibana -n fashionweb --timeout=180s
```

### 5.2 Đồng Bộ Dữ Liệu
Sau khi chạy tunnel (Phần 7), gọi API để sync data từ MySQL sang Elasticsearch:
```bash
curl -X POST http://localhost:3000/api/search/sync
```

---

## 6. Deploy Monitoring (Prometheus & Grafana)

### 6.1 Deploy
```bash
# Prometheus
kubectl apply -f k8s/prometheus-rbac.yaml
kubectl apply -f k8s/prometheus-configmap.yaml
kubectl apply -f k8s/prometheus-deployment.yaml
kubectl apply -f k8s/prometheus-service.yaml

# Node Exporter (Metrics máy chủ)
kubectl apply -f k8s/node-exporter-daemonset.yaml

# Grafana (Dashboard)
kubectl apply -f k8s/grafana-configmap.yaml
kubectl apply -f k8s/grafana-deployment.yaml
```

### 6.2 Verification
- **Prometheus:** [http://localhost:9090](http://localhost:9090)
- **Grafana:** [http://localhost:3002](http://localhost:3002) (Login: `admin` / `admin`)

### 6.3 Deploy Alerting (Alertmanager)
Chúng ta sẽ triển khai Alertmanager để nhận cảnh báo từ Prometheus và gửi qua Telegram.

1. **Cấu hình Telegram:**
   Mở file `k8s/alertmanager-configmap.yaml`, cập nhật `bot_token` và `chat_id` của bạn.

2. **Deploy:**
   ```bash
   kubectl apply -f k8s/alertmanager-configmap.yaml
   kubectl apply -f k8s/alertmanager-deployment.yaml
   
   # Cập nhật Prometheus để trỏ về Alertmanager
   kubectl apply -f k8s/prometheus-configmap.yaml
   kubectl rollout restart deployment/prometheus -n fashionweb
   ```

3. **Truy cập:** [http://localhost:9093](http://localhost:9093)

---


## 7. Truy Cập Ứng Dụng

Do hạn chế của Minikube trên macOS, cần dùng port-forwarding.

### Chạy Script
```bash
chmod +x start_tunnels.sh
./start_tunnels.sh
```

### URLs
| Service | URL | Note |
|---|---|---|
| Frontend | http://localhost:3001 | |
| Backend | http://localhost:3000 | |
| Kibana | http://localhost:5601 | Logs Dashboard |
| Grafana | http://localhost:3002 | Metrics Dashboard |
| Prometheus | http://localhost:9090 | |

---

## 8. Khởi Động Lại & Troubleshooting

### Khởi Động Lại (Sau khi tắt máy)
Chạy script tự động Resume:
```bash
./resume_project.sh
```

### Reset Minikube
Nếu gặp lỗi quá nhiều, reset lại từ đầu:
```bash
minikube delete
minikube start
```

### Debug Logs
```bash
# Xem logs backend
kubectl logs -n fashionweb deployment/backend

# Xem lỗi Elasticsearch
kubectl logs -f statefulset/elasticsearch -n fashionweb
```

### 8.4 Lỗi Prometheus "CrashLoopBackOff"
Nếu Prometheus bị lỗi `CrashLoopBackOff` với log `resource temporarily unavailable` (lỗi khóa DB), nguyên nhân do volume chưa kịp nhả ra khi restart.
*   **Cách khắc phục:** Xóa thủ công pod cũ để nó nhả volume ra.
    ```bash
    kubectl delete pods -n fashionweb -l app=prometheus
    ```
    *(Hiện tại Deployment đã được cấu hình strategy `Recreate` để hạn chế lỗi này).*

---

## 9. Tích Hợp Backend (Dành cho Dev)

Code backend (Node.js) sử dụng biến môi trường từ `configmap.yaml` để kết nối Elasticsearch:

```javascript
const { Client } = require('@elastic/elasticsearch');

// Các biến ELASTICSEARCH_HOST và PORT được define trong k8s/backend-deployment.yaml
const client = new Client({
  node: `http://${process.env.ELASTICSEARCH_HOST}:${process.env.ELASTICSEARCH_PORT}`
});
```

**Debug kết nối từ trong pod:**
```bash
# Vào trong pod backend
kubectl exec -it deployment/backend -n fashionweb -- sh

# Test kết nối
wget -q -O- http://elasticsearch:9200
```
