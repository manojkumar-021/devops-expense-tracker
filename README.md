# 💸 DevOps Expense Tracker

[![CI Pipeline](https://github.com/manojkumar-021/devops-expense-tracker/actions/workflows/ci.yml/badge.svg)](https://github.com/manojkumar-021/devops-expense-tracker/actions)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white)](https://hub.docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Minikube-326CE5?logo=kubernetes&logoColor=white)](https://minikube.sigs.k8s.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A production-style **end-to-end DevOps project** demonstrating a complete software delivery lifecycle — from application development to containerization, Kubernetes deployment, CI/CD automation, and real-time monitoring with Prometheus and Grafana.

---

## 🏗️ Architecture Overview

```
Developer Push
      │
      ▼
 GitHub Repo
      │
      ▼
 Jenkins CI ──────────────────────────────────────┐
      │                                            │
   Build & Test                            GitHub Actions
      │                                    (lint + test)
      ▼
 Docker Build
      │
      ▼
 Docker Image
      │
      ▼
 Kubernetes (Minikube)
  ┌───────────────────────┐
  │  deployment.yaml      │
  │  3 Replicas (pods)    │
  │  NodePort Service     │
  └───────────┬───────────┘
              │
              ▼
    Prometheus ──► Grafana Dashboard
    (metrics scrape)  (visualization)
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Application | Node.js + Express |
| Containerization | Docker |
| Orchestration | Kubernetes (Minikube) |
| Package Management | Helm |
| CI Pipeline | Jenkins + GitHub Actions |
| Monitoring | Prometheus + Grafana |

---

## ✨ Features

- REST API to **add and retrieve expenses** (`POST /expenses`, `GET /expenses`)
- **Dockerized** with multi-stage build for a lean image
- Deployed on **Kubernetes** with 3 replicas for high availability
- **Jenkins pipeline** with stages: Build → Test → Docker Build → Deploy
- **GitHub Actions** workflow for automated CI on every push
- **Prometheus** scrapes live application metrics
- **Grafana** dashboards for real-time visualization

---

## 🚀 Quick Start

### Prerequisites
- Docker
- Minikube
- kubectl
- Helm

### 1. Clone the repo
```bash
git clone https://github.com/manojkumar-021/devops-expense-tracker.git
cd devops-expense-tracker
```

### 2. Run with Docker
```bash
docker build -t expense-app .
docker run -p 3000:3000 expense-app
```

### 3. Deploy to Kubernetes
```bash
minikube start
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl get pods   # verify pods are running
```

### 4. Set up Monitoring
```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install monitoring prometheus-community/kube-prometheus-stack
kubectl port-forward svc/monitoring-grafana 4000:80
# Open http://localhost:4000 (admin / prom-operator)
```

---

## 📁 Project Structure

```
devops-expense-tracker/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI pipeline
├── Dockerfile              # Container image definition
├── Jenkinsfile             # Jenkins pipeline stages
├── deployment.yaml         # Kubernetes Deployment (3 replicas)
├── service.yaml            # Kubernetes NodePort Service
├── app.js                  # Express REST API
├── package.json
└── README.md
```

---

## 🔁 CI/CD Pipeline (Jenkins)

```
Stage 1: Checkout   → Clone repo from GitHub
Stage 2: Install    → npm install
Stage 3: Test       → npm test
Stage 4: Docker     → Build & tag image
Stage 5: Deploy     → kubectl apply to Minikube
```

---

## 🔭 Upcoming Enhancements

- [ ] Add MongoDB for persistent expense storage
- [ ] Build a React frontend dashboard
- [ ] Push Docker image to DockerHub via pipeline
- [ ] Add ArgoCD for GitOps-based deployment
- [ ] Implement Horizontal Pod Autoscaler (HPA)

---

## 💡 Key Learnings

- Containerization with Docker and multi-stage builds
- Kubernetes deployment, scaling, and service exposure
- Helm chart installation for complex monitoring stacks
- Building end-to-end CI/CD with Jenkins declarative pipelines
- Prometheus metrics scraping and Grafana dashboard creation

---

## 👤 Author

**Manoj Kumar**
- GitHub: [@manojkumar-021](https://github.com/manojkumar-021)
- LinkedIn: [manojvijayakumar](https://www.linkedin.com/in/manojvijayakumar)
