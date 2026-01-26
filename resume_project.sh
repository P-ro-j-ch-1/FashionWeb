#!/bin/bash

echo "=== RESUMING FASHIONWEB PROJECT ==="

# 1. Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "Error: Docker is not running. Please start Docker Desktop first."
    exit 1
fi

# 2. Start Minikube (if stopped)
echo "Checking Minikube status..."
if ! minikube status | grep -q "Running"; then
    echo "Starting Minikube..."
    minikube start
else
    echo "Minikube is already running."
fi

# 3. Wait for critical pods
echo "Waiting for core services to be ready..."
kubectl wait --for=condition=ready pod -l app=backend -n fashionweb --timeout=120s
kubectl wait --for=condition=ready pod -l app=mysql -n fashionweb --timeout=120s

# 4. Start Tunnels
echo "Starting tunnels..."
./start_tunnels.sh
