
# Sử dụng Node.js 18 Alpine (lightweight)
FROM node:18-alpine

# Tạo thư mục làm việc
WORKDIR /app

# Copy package files trước để tận dụng Docker cache
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Expose port 3000 (port mặc định của backend)
EXPOSE 3000

# Command để chạy ứng dụng
# Sử dụng nodemon với babel-node như trong package.json
CMD ["npm", "start"]
