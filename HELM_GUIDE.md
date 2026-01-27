# Hướng Dẫn Sử Dụng Helm cho FashionWeb

Chúng ta đã chuyển đổi toàn bộ dự án sang **Helm Chart** để quản lý dễ dàng hơn.

## 1. Cài đặt Helm
Nếu bạn chưa có Helm, hãy cài đặt nó:
```bash
brew install helm
```

## ⚠️ Quan Trọng: Xoá Resource Cũ (Nếu Đang Chạy)
Nếu bạn đã deploy dự án bằng lệnh `kubectl apply -f k8s/` trước đây, bạn **PHẢI** xóa chúng đi trước khi dùng Helm, nếu không sẽ bị lỗi "Services exists".

Chạy lệnh sau để xoá sạch deployment cũ:
```bash
kubectl delete -f k8s/
```
Chờ vài phút để các pod tắt hẳn.


## 2. Cấu trúc Chart
Chart của dự án nằm tại thư mục `charts/fashionweb`, bao gồm:
- `values.yaml`: Nơi cấu hình toàn bộ dự án (Image, Port, Password...).
- `templates/`: Các file Kubernetes manifests đã được template hóa.

## 3. Các Lệnh Cơ Bản

### Kiểm tra (Dry-run)
Trước khi cài đặt, bạn có thể kiểm tra xem Helm sẽ sinh ra file yaml như thế nào:
```bash
helm template fashionweb ./charts/fashionweb
```
Hoặc kiểm tra lỗi cú pháp:
```bash
helm lint ./charts/fashionweb
```

### Cài đặt (Install)
Để triển khai toàn bộ dự án (MySQL, Backend, Frontend, ELK, Monitoring):
```bash
helm install fashionweb ./charts/fashionweb
```

### Nâng cấp (Upgrade)
Sau khi bạn sửa code hoặc sửa file `values.yaml`, hãy chạy lệnh này để cập nhật:
```bash
helm upgrade fashionweb ./charts/fashionweb
```

### Gỡ bỏ (Uninstall)
Để xoá toàn bộ dự án:
```bash
helm uninstall fashionweb
```

## 4. Tùy Chỉnh Cấu Hình (`values.yaml`)
Bạn có thể mở file `charts/fashionweb/values.yaml` để thay đổi:
- **Image Tag**: Khi có version mới của backend/frontend.
- **Resources**: Tăng giảm RAM/CPU cho ElasticSearch hay Backned.
- **Ports**: Đổi NodePort nếu bị trùng.
- **Passwords**: Cập nhật mật khẩu DB hoặc Token Telegram.

---
**Lưu ý:** Thư mục `k8s/` cũ vẫn được giữ lại để tham khảo, nhưng từ giờ bạn nên dùng Helm để quản lý đồng bộ.
