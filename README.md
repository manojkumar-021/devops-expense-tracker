# 💰 DevOps Expense Tracker

A production-style **Node.js REST API** demonstrating a complete end-to-end DevOps workflow — from local development to containerized Kubernetes deployment with full monitoring.

> **Goal**: Showcase the full DevOps lifecycle: Code → Containerize → Deploy → Monitor → Alert

---

## 🏗️ Architecture Overview

```
Developer
    │
    ▼
GitHub (source control)
    │
    ├──► GitHub Actions ──► Docker Build ──► Docker Hub
    │
    └──► Jenkins Pipeline ──► Kubernetes (Minikube)
                                    │
                              ┌─────┴──────┐
                              │  Pods (×3) │
                              └─────┬──────┘
                                    │
                              Prometheus (metrics)
                                    │
                              Grafana (dashboards)
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Application | Node.js, Express |
| Containerization | Docker |
| Orchestration | Kubernetes (Minikube) |
| Package Management | Helm |
| CI/CD | GitHub Actions + Jenkins |
| Monitoring | Prometheus + Grafana |
| Source Control | Git, GitHub |

---

## ✨ Features

- **REST API** — Add and retrieve expense records via HTTP endpoints
- **Dockerized** — Fully containerized for consistent environments
- **Kubernetes Deployment** — Multi-replica deployment with service exposure
- **CI/CD Pipeline** — Automated build and deployment via GitHub Actions + Jenkins
- **Monitoring Stack** — Prometheus scrapes metrics; Grafana visualizes them in real time
- **Helm Charts** — Monitoring stack installed via `kube-prometheus-stack`

---

## 📁 Project Structure

```
devops-expense-tracker/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions pipeline
├── Dockerfile              # Container image definition
├── Jenkinsfile             # Jenkins pipeline stages
├── deployment.yaml         # Kubernetes Deployment manifest
├── service.yaml            # Kubernetes Service manifest
├── app.js                  # Express API (main application)
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Docker installed
- Minikube + kubectl installed
- Node.js 18+

### Run Locally with Docker

```bash
# Clone the repo
git clone https://github.com/manojkumar-021/devops-expense-tracker.git
cd devops-expense-tracker

# Build Docker image
docker build -t expense-app .

# Run container
docker run -p 3000:3000 expense-app
```

API available at: `http://localhost:3000`

### Deploy on Kubernetes

```bash
# Start Minikube
minikube start

# Apply manifests
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

# Verify pods are running
kubectl get pods

# Access the service
minikube service expense-service
```

---

## 📊 Monitoring Setup

```bash
# Add Prometheus Helm repo
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

# Install monitoring stack
helm install monitoring prometheus-community/kube-prometheus-stack

# Access Grafana dashboard
kubectl port-forward svc/monitoring-grafana 4000:80
```

Open Grafana at: `http://localhost:4000`
Default login: `admin / prom-operator`

---

## 🔁 CI/CD Pipeline

**GitHub Actions** (`.github/workflows/ci.yml`):
1. Triggered on every push to `main`
2. Runs lint and build checks
3. Builds Docker image
4. Pushes to Docker Hub

**Jenkins** (`Jenkinsfile`):
1. Pulls latest image
2. Deploys to Kubernetes cluster
3. Verifies pod health

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check |
| `GET` | `/expenses` | List all expenses |
| `POST` | `/expenses` | Add a new expense |

**Example Request:**
```bash
curl -X POST http://localhost:3000/expenses \
  -H "Content-Type: application/json" \
  -d '{"title": "Cloud Credits", "amount": 500}'
```

---

## 🔑 Key Learnings

- Containerizing Node.js apps and managing multi-stage Docker builds
- Writing Kubernetes manifests for Deployments, Services, and ConfigMaps
- Setting up a full CI/CD pipeline from commit to production
- Installing and configuring Prometheus + Grafana using Helm
- Debugging pod crashes, image pull errors, and service connectivity issues in Kubernetes

---

## 🔭 Upcoming Enhancements

- [ ] Add MongoDB for persistent storage (with Kubernetes PersistentVolume)
- [ ] Add Terraform scripts to provision AWS EKS cluster
- [ ] Set up Grafana alerting rules and Slack notifications
- [ ] Add a simple React frontend

---

## 👤 Author

**Manoj Kumar**
- GitHub: [@manojkumar-021](https://github.com/manojkumar-021)
- LinkedIn: [manojvijayakumar](https://www.linkedin.com/in/manojvijayakumar)
