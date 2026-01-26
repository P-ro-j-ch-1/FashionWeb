#!/bin/bash
echo "Firing test alert to Alertmanager..."
curl -H "Content-Type: application/json" -d '[
  {
    "labels": {
      "alertname": "ManualTestAlert",
      "severity": "check"
    },
    "annotations": {
      "summary": "Manual Test Alert",
      "description": "Đmm."
    }
  }
]' http://localhost:9093/api/v1/alerts

echo -e "\n\nĐã gửi! Hãy kiểm tra Telegram."
