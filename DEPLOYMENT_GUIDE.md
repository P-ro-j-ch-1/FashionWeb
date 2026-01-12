# Hướng Dẫn Deploy FashionWeb trên Kubernetes (Linux VM)

## Mục Lục
1. [Yêu Cầu Hệ Thống](#1-yêu-cầu-hệ-thống)
2. [Cài Đặt Môi Trường](#2-cài-đặt-môi-trường)
3. [Clone Dự Án](#3-clone-dự-án)
4. [Build Docker Images](#4-build-docker-images)
5. [Deploy lên Kubernetes](#5-deploy-lên-kubernetes)
6. [Import Database](#6-import-database)
7. [Truy Cập Ứng Dụng](#7-truy-cập-ứng-dụng)
8. [Các Lệnh Quản Lý](#8-các-lệnh-quản-lý)
9. [Xử Lý Lỗi Thường Gặp](#9-xử-lý-lỗi-thường-gặp)

---

## 1. Yêu Cầu Hệ Thống

### Phần cứng tối thiểu:
- **CPU**: 2 cores
- **RAM**: 4GB (khuyến nghị 8GB)
- **Disk**: 20GB trống

### Hệ điều hành:
- Ubuntu 20.04/22.04 LTS (khuyến nghị)
- CentOS 7/8
- Debian 10/11

---

## 2. Cài Đặt Môi Trường

### 2.1. Cập nhật hệ thống (Ubuntu/Debian)

```bash
sudo apt update && sudo apt upgrade -y
```

### 2.2. Cài đặt Docker

```bash
# Cài đặt các gói cần thiết
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

# Thêm GPG key của Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Thêm Docker repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Cài đặt Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Thêm user hiện tại vào group docker (để chạy docker không cần sudo)
sudo usermod -aG docker $USER

# Khởi động Docker
sudo systemctl enable docker
sudo systemctl start docker

# Đăng xuất và đăng nhập lại để áp dụng group
# Hoặc chạy: newgrp docker
```

### 2.3. Cài đặt Minikube

```bash
# Tải Minikube binary
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64

# Cài đặt Minikube
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Xóa file tải về
rm minikube-linux-amd64

# Kiểm tra cài đặt
minikube version
```

### 2.4. Cài đặt kubectl

```bash
# Tải kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

# Cài đặt kubectl
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# Xóa file tải về
rm kubectl

# Kiểm tra cài đặt
kubectl version --client
```

### 2.5. Khởi động Minikube

```bash
# Khởi động Minikube với driver docker
minikube start --driver=docker --memory=4096 --cpus=2

# Kiểm tra trạng thái
minikube status

# Kích hoạt các addon cần thiết
minikube addons enable ingress
minikube addons enable metrics-server
```

---

## 3. Clone Dự Án

```bash
# Clone repository từ GitHub
git clone https://github.com/P-ro-j-ch-1/FashionWeb.git

# Di chuyển vào thư mục dự án
cd FashionWeb
```

---

## 4. Build Docker Images

> **Quan trọng**: Phải sử dụng Docker daemon của Minikube để Kubernetes có thể tìm thấy images.

### 4.1. Kết nối với Docker daemon của Minikube

```bash
# Cấu hình shell để sử dụng Docker của Minikube
eval $(minikube docker-env)

# Kiểm tra đã kết nối đúng chưa
docker images
```

### 4.2. Build Backend Image

```bash
# Build backend image
docker build -t fashionweb-backend:latest ./FashionAPI

# Kiểm tra image đã được tạo
docker images | grep fashionweb-backend
```

### 4.3. Build Frontend Image

Trước khi build frontend, cần cập nhật `REACT_APP_BACKEND_URL` để trỏ đúng đến backend service:

```bash
# Lấy IP của Minikube
MINIKUBE_IP=$(minikube ip)
echo "Minikube IP: $MINIKUBE_IP"

# Build frontend với backend URL đúng
# Lưu ý: Frontend cần truy cập backend qua NodePort 30000
docker build \
  --build-arg REACT_APP_BACKEND_URL=http://${MINIKUBE_IP}:30000 \
  -t fashionweb-frontend:latest \
  ./Frontend
```

**Hoặc** nếu bạn muốn chỉnh sửa Dockerfile:

```bash
# Mở file Frontend/Dockerfile và sửa dòng:
# ENV REACT_APP_BACKEND_URL=http://localhost:3000
# thành:
# ENV REACT_APP_BACKEND_URL=http://<MINIKUBE_IP>:30000

# Sau đó build:
docker build -t fashionweb-frontend:latest ./Frontend
```

### 4.4. Kiểm tra các images đã build

```bash
docker images | grep fashionweb
```

Kết quả mong đợi:
```
fashionweb-frontend   latest   xxxxxxxxxxxx   Few seconds ago   XXX MB
fashionweb-backend    latest   xxxxxxxxxxxx   Few seconds ago   XXX MB
```

---

## 5. Deploy lên Kubernetes

### 5.1. Cập nhật Backend Service để expose NodePort

Trước khi deploy, cần sửa `backend-deployment.yaml` để expose port 30000:

```bash
# Mở file k8s/backend-deployment.yaml
nano k8s/backend-deployment.yaml
```

Sửa phần Service ở cuối file:
```yaml
---
apiVersion: v1
kind: Service
metadata:
  name: backend
  namespace: fashionweb
spec:
  selector:
    app: backend
  ports:
    - port: 3000
      targetPort: 3000
      nodePort: 30000  # Thêm dòng này
  type: NodePort        # Đổi từ ClusterIP thành NodePort
```

### 5.2. Deploy theo thứ tự

```bash
# Bước 1: Tạo namespace
kubectl apply -f k8s/namespace.yaml

# Bước 2: Tạo ConfigMap và Secret
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/secret.yaml

# Bước 3: Deploy MySQL
kubectl apply -f k8s/mysql-deployment.yaml

# Đợi MySQL sẵn sàng (khoảng 1-2 phút)
kubectl wait --for=condition=ready pod -l app=mysql -n fashionweb --timeout=120s

# Kiểm tra MySQL đã chạy chưa
kubectl get pods -n fashionweb -l app=mysql

# Bước 4: Deploy Backend
kubectl apply -f k8s/backend-deployment.yaml

# Đợi Backend sẵn sàng
kubectl wait --for=condition=ready pod -l app=backend -n fashionweb --timeout=120s

# Bước 5: Deploy Frontend
kubectl apply -f k8s/frontend-deployment.yaml

# Đợi Frontend sẵn sàng
kubectl wait --for=condition=ready pod -l app=frontend -n fashionweb --timeout=120s
```

### 5.3. Kiểm tra trạng thái deployment

```bash
# Xem tất cả pods
kubectl get pods -n fashionweb

# Xem tất cả services
kubectl get svc -n fashionweb

# Xem tất cả deployments
kubectl get deployments -n fashionweb

# Xem chi tiết
kubectl get all -n fashionweb
```

Kết quả mong đợi:
```
NAME                            READY   STATUS    RESTARTS   AGE
pod/backend-xxxxxxxxx-xxxxx     1/1     Running   0          2m
pod/frontend-xxxxxxxxx-xxxxx    1/1     Running   0          1m
pod/mysql-xxxxxxxxx-xxxxx       1/1     Running   0          3m

NAME               TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
service/backend    NodePort    10.96.xxx.xxx    <none>        3000:30000/TCP   2m
service/frontend   NodePort    10.96.xxx.xxx    <none>        80:30001/TCP     1m
service/mysql      ClusterIP   None             <none>        3306/TCP         3m
```

---

## 6. Import Database

### 6.1. Copy file SQL vào MySQL pod

```bash
# Lấy tên MySQL pod
MYSQL_POD=$(kubectl get pods -n fashionweb -l app=mysql -o jsonpath='{.items[0].metadata.name}')
echo "MySQL Pod: $MYSQL_POD"

# Copy file SQL vào pod
kubectl cp database/export.sql fashionweb/$MYSQL_POD:/tmp/export.sql
```

### 6.2. Import database

```bash
# Truy cập MySQL và import
kubectl exec -it $MYSQL_POD -n fashionweb -- mysql -u root -proot123 fashionweb < database/export.sql

# Hoặc sử dụng cách khác:
kubectl exec -it $MYSQL_POD -n fashionweb -- bash -c "mysql -u root -proot123 fashionweb < /tmp/export.sql"
```

### 6.3. Kiểm tra database

```bash
# Kết nối vào MySQL
kubectl exec -it $MYSQL_POD -n fashionweb -- mysql -u root -proot123 fashionweb

# Trong MySQL shell, chạy:
SHOW TABLES;
SELECT COUNT(*) FROM products;  # Nếu có bảng products
exit;
```

---

## 7. Truy Cập Ứng Dụng

### 7.1. Lấy URL truy cập

```bash
# Lấy Minikube IP
minikube ip

# Hoặc lấy URL trực tiếp
minikube service frontend -n fashionweb --url
minikube service backend -n fashionweb --url
```

### 7.2. URL truy cập

- **Frontend**: `http://<MINIKUBE_IP>:30001`
- **Backend API**: `http://<MINIKUBE_IP>:30000`

Ví dụ:
```
Frontend: http://192.168.49.2:30001
Backend:  http://192.168.49.2:30000
```

### 7.3. Mở trình duyệt (nếu có GUI)

```bash
# Mở frontend trong trình duyệt
minikube service frontend -n fashionweb

# Mở backend trong trình duyệt
minikube service backend -n fashionweb
```

### 7.4. Truy cập từ máy khác trong mạng LAN

Nếu bạn muốn truy cập từ máy khác:

```bash
# Tạo tunnel (chạy trong terminal riêng, giữ mở)
minikube tunnel
```

Hoặc sử dụng port-forward:

```bash
# Forward frontend port
kubectl port-forward -n fashionweb svc/frontend 8080:80 --address='0.0.0.0' &

# Forward backend port
kubectl port-forward -n fashionweb svc/backend 3000:3000 --address='0.0.0.0' &
```

---

## 8. Các Lệnh Quản Lý

### 8.1. Xem logs

```bash
# Xem logs của backend
kubectl logs -f -l app=backend -n fashionweb

# Xem logs của frontend
kubectl logs -f -l app=frontend -n fashionweb

# Xem logs của mysql
kubectl logs -f -l app=mysql -n fashionweb
```

### 8.2. Restart pods

```bash
# Restart backend
kubectl rollout restart deployment/backend -n fashionweb

# Restart frontend
kubectl rollout restart deployment/frontend -n fashionweb

# Restart tất cả
kubectl rollout restart deployment -n fashionweb
```

### 8.3. Scale pods

```bash
# Scale backend lên 3 replicas
kubectl scale deployment/backend -n fashionweb --replicas=3

# Scale frontend lên 2 replicas
kubectl scale deployment/frontend -n fashionweb --replicas=2
```

### 8.4. Truy cập vào container

```bash
# Truy cập bash trong backend pod
kubectl exec -it deployment/backend -n fashionweb -- sh

# Truy cập bash trong frontend pod
kubectl exec -it deployment/frontend -n fashionweb -- sh

# Truy cập MySQL
kubectl exec -it deployment/mysql -n fashionweb -- mysql -u root -proot123
```

### 8.5. Xóa và deploy lại

```bash
# Xóa tất cả resources trong namespace
kubectl delete all --all -n fashionweb

# Xóa namespace hoàn toàn
kubectl delete namespace fashionweb

# Deploy lại từ đầu
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/secret.yaml
kubectl apply -f k8s/mysql-deployment.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml
```

### 8.6. Dừng và khởi động Minikube

```bash
# Dừng Minikube (giữ data)
minikube stop

# Khởi động lại
minikube start

# Xóa hoàn toàn Minikube
minikube delete
```

---

## 9. Xử Lý Lỗi Thường Gặp

### 9.1. Pod ở trạng thái ImagePullBackOff

```bash
# Kiểm tra chi tiết lỗi
kubectl describe pod <pod-name> -n fashionweb

# Nguyên nhân: Image không tồn tại trong Minikube Docker
# Giải pháp: Build lại image với Docker của Minikube
eval $(minikube docker-env)
docker build -t fashionweb-backend:latest ./FashionAPI
docker build -t fashionweb-frontend:latest ./Frontend

# Restart deployment
kubectl rollout restart deployment -n fashionweb
```

### 9.2. Pod ở trạng thái CrashLoopBackOff

```bash
# Xem logs để tìm lỗi
kubectl logs <pod-name> -n fashionweb --previous

# Kiểm tra events
kubectl describe pod <pod-name> -n fashionweb
```

### 9.3. Backend không kết nối được MySQL

```bash
# Kiểm tra MySQL đã sẵn sàng chưa
kubectl exec -it deployment/mysql -n fashionweb -- mysqladmin ping -u root -proot123

# Kiểm tra DNS resolution
kubectl exec -it deployment/backend -n fashionweb -- nslookup mysql

# Kiểm tra kết nối từ backend
kubectl exec -it deployment/backend -n fashionweb -- nc -zv mysql 3306
```

### 9.4. Frontend không gọi được API

```bash
# Kiểm tra REACT_APP_BACKEND_URL trong build
# Frontend được build với URL cố định, cần rebuild nếu IP thay đổi

# Lấy IP mới
minikube ip

# Rebuild frontend với IP mới
eval $(minikube docker-env)
docker build --build-arg REACT_APP_BACKEND_URL=http://$(minikube ip):30000 -t fashionweb-frontend:latest ./Frontend

# Restart frontend
kubectl rollout restart deployment/frontend -n fashionweb
```

### 9.5. Không đủ resources

```bash
# Kiểm tra resources
kubectl top pods -n fashionweb
kubectl top nodes

# Tăng resources cho Minikube
minikube stop
minikube delete
minikube start --memory=8192 --cpus=4
```

### 9.6. PersistentVolumeClaim pending

```bash
# Kiểm tra PVC status
kubectl get pvc -n fashionweb

# Kiểm tra PV
kubectl get pv

# Nếu pending, kiểm tra storage class
kubectl get storageclass
```

---

## Script Deploy Nhanh

Tạo file `deploy.sh` để tự động hóa quá trình deploy:

```bash
#!/bin/bash

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}=== FashionWeb K8s Deployment Script ===${NC}"

# Check if minikube is running
if ! minikube status > /dev/null 2>&1; then
    echo -e "${YELLOW}Starting Minikube...${NC}"
    minikube start --driver=docker --memory=4096 --cpus=2
fi

# Use Minikube's Docker daemon
echo -e "${YELLOW}Configuring Docker environment...${NC}"
eval $(minikube docker-env)

# Get Minikube IP
MINIKUBE_IP=$(minikube ip)
echo -e "${GREEN}Minikube IP: $MINIKUBE_IP${NC}"

# Build images
echo -e "${YELLOW}Building Backend image...${NC}"
docker build -t fashionweb-backend:latest ./FashionAPI

echo -e "${YELLOW}Building Frontend image...${NC}"
docker build --build-arg REACT_APP_BACKEND_URL=http://${MINIKUBE_IP}:30000 -t fashionweb-frontend:latest ./Frontend

# Deploy to Kubernetes
echo -e "${YELLOW}Deploying to Kubernetes...${NC}"
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/secret.yaml
kubectl apply -f k8s/mysql-deployment.yaml

echo -e "${YELLOW}Waiting for MySQL...${NC}"
kubectl wait --for=condition=ready pod -l app=mysql -n fashionweb --timeout=120s

kubectl apply -f k8s/backend-deployment.yaml
echo -e "${YELLOW}Waiting for Backend...${NC}"
kubectl wait --for=condition=ready pod -l app=backend -n fashionweb --timeout=120s

kubectl apply -f k8s/frontend-deployment.yaml
echo -e "${YELLOW}Waiting for Frontend...${NC}"
kubectl wait --for=condition=ready pod -l app=frontend -n fashionweb --timeout=120s

# Import database
echo -e "${YELLOW}Importing database...${NC}"
MYSQL_POD=$(kubectl get pods -n fashionweb -l app=mysql -o jsonpath='{.items[0].metadata.name}')
kubectl cp database/export.sql fashionweb/$MYSQL_POD:/tmp/export.sql
kubectl exec -it $MYSQL_POD -n fashionweb -- bash -c "mysql -u root -proot123 fashionweb < /tmp/export.sql"

echo -e "${GREEN}=== Deployment Complete! ===${NC}"
echo -e "${GREEN}Frontend: http://${MINIKUBE_IP}:30001${NC}"
echo -e "${GREEN}Backend:  http://${MINIKUBE_IP}:30000${NC}"

kubectl get all -n fashionweb
```

Sử dụng:
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## Tác Giả

- **GitHub**: [thandieudaibip81](https://github.com/thandieudaibip81)
- **Email**: tiencao8811@gmail.com
