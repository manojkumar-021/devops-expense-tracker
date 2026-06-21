# Deployment Guide

## Prerequisites

- Kubernetes cluster (1.20+)
- kubectl configured
- Helm 3.x
- Docker (for building images)

## Quick Deployment

### 1. Build and Push Docker Image

```bash
# Build the production image
docker build -f Dockerfile.prod -t myregistry/expense-tracker:latest .

# Push to registry
docker push myregistry/expense-tracker:latest
```

### 2. Deploy with Helm

```bash
# Install or upgrade
helm upgrade --install expense-app ./helm \
  --namespace production \
  --create-namespace \
  --values helm/values.yaml \
  --set image.repository=myregistry/expense-tracker \
  --set image.tag=latest
```

### 3. Verify Deployment

```bash
# Check deployment status
kubectl get deployments -n production

# Check pods
kubectl get pods -n production

# Check services
kubectl get svc -n production

# View logs
kubectl logs -f deployment/expense-tracker -n production
```

## Environment-Specific Deployments

### Development

```bash
helm install expense-dev ./helm \
  --namespace dev \
  --create-namespace \
  --values helm/values-dev.yaml
```

### Production

```bash
helm install expense-prod ./helm \
  --namespace production \
  --create-namespace \
  --values helm/values-prod.yaml \
  --wait \
  --timeout 5m
```

## Scaling

### Enable HPA

```bash
helm upgrade expense-app ./helm \
  --namespace production \
  --set autoscaling.enabled=true \
  --set autoscaling.minReplicas=3 \
  --set autoscaling.maxReplicas=10
```

## Rolling Updates

### Update Image

```bash
helm upgrade expense-app ./helm \
  --namespace production \
  --set image.tag=v2.0.0

# Monitor rollout
kubectl rollout status deployment/expense-tracker -n production
```

### Rollback

```bash
# Rollback to previous version
kubectl rollout undo deployment/expense-tracker -n production
```

## Troubleshooting

### Pod not starting

```bash
# Check pod status
kubectl describe pod <pod-name> -n production

# View logs
kubectl logs <pod-name> -n production
kubectl logs <pod-name> -n production --previous
```

### CrashLoopBackOff

```bash
# Check liveness probe
kubectl get pod <pod-name> -o yaml -n production | grep -A 5 livenessProbe

# Check readiness probe
kubectl get pod <pod-name> -o yaml -n production | grep -A 5 readinessProbe
```

## Monitoring

### Access Prometheus

```bash
kubectl port-forward -n monitoring svc/monitoring-prometheus 9090:9090
# Open http://localhost:9090
```

### Access Grafana

```bash
kubectl port-forward -n monitoring svc/monitoring-grafana 3000:80
# Open http://localhost:3000
```

## Best Practices

1. **Always use specific image tags**, not `latest`
2. **Use namespace isolation** for different environments
3. **Enable health checks** for automatic pod restart
4. **Set resource requests and limits** to prevent resource starvation
5. **Use HPA** for automatic scaling
6. **Monitor metrics** with Prometheus/Grafana
7. **Keep rollout history** for quick rollbacks
8. **Test in staging** before production deployment
9. **Use GitOps** (ArgoCD) for production deployments
