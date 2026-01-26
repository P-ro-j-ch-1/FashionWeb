#!/bin/bash
# Enable port forwarding for services

# Kill existing kubectl port-forward processes to avoid conflicts
pkill -f 'kubectl port-forward' || true

echo "Starting tunnels..."

# Backend: 3000 -> 3000
kubectl port-forward -n fashionweb service/backend 3000:3000 > /dev/null 2>&1 &
echo "Backend: http://localhost:3000"

# Frontend: 3001 -> 80
kubectl port-forward -n fashionweb service/frontend 3001:80 > /dev/null 2>&1 &
echo "Frontend: http://localhost:3001"

# Elasticsearch: 9200 -> 9200
kubectl port-forward -n fashionweb service/elasticsearch 9200:9200 > /dev/null 2>&1 &
echo "Elasticsearch: http://localhost:9200"

# Kibana: 5601 -> 5601
kubectl port-forward -n fashionweb service/kibana 5601:5601 > /dev/null 2>&1 &
echo "Kibana: http://localhost:5601"

# Prometheus: 9090 -> 9090
kubectl port-forward -n fashionweb service/prometheus 9090:9090 > /dev/null 2>&1 &
echo "Prometheus: http://localhost:9090"

# Grafana: 3002 -> 3000
kubectl port-forward -n fashionweb service/grafana 3002:3000 > /dev/null 2>&1 &
echo "Grafana: http://localhost:3002 (Login: admin/admin)"

echo "Tunnels started! Press Ctrl+C to stop (if running in foreground) or close terminal."
