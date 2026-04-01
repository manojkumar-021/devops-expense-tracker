# Expense Tracker API

## Overview

This project is a backend application developed to manage and track daily expenses. It is designed to demonstrate an end-to-end DevOps workflow, including application development, containerization, deployment, and monitoring.

---

## Technologies Used

* Node.js (Express)
* Docker
* Kubernetes (Minikube)
* Helm
* Prometheus
* Grafana

---

## Features

* REST API to add and retrieve expenses
* Containerized application using Docker
* Deployment on Kubernetes with multiple replicas
* Monitoring setup using Prometheus and Grafana
* Real-time metrics visualization

---

## Implementation Details

The project was built in the following stages:

1. Developed a RESTful API using Node.js and Express
2. Created a Docker image to containerize the application
3. Deployed the application on a Kubernetes cluster using Minikube
4. Installed monitoring tools using Helm (Prometheus and Grafana)
5. Generated API traffic and verified metrics through Grafana dashboards

---

## Docker Setup

Build the image:
docker build -t expense-app .

Run the container:
docker run -p 3000:3000 expense-app

---

## Kubernetes Deployment

Apply configuration files:
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

Check running resources:
kubectl get pods

---

## Monitoring Setup

Install monitoring stack:
helm install monitoring prometheus-community/kube-prometheus-stack

Access Grafana:
kubectl port-forward svc/monitoring-grafana 4000:80

Open in browser:
http://localhost:4000

---

## Key Learnings

* Containerization using Docker
* Kubernetes deployment and scaling concepts
* Using Helm charts for application setup
* Monitoring systems with Prometheus and Grafana
* Troubleshooting real-world deployment and configuration issues

---

## Future Enhancements

* Integrate a database such as MongoDB
* Add a frontend user interface
* Implement CI/CD pipeline for automated deployment

---

## Author

Manoj Kumar
GitHub: https://github.com/manojkumar-021
