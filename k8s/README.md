## Kubernetes Demo
### Apply
```
kubectl apply -k ./
```
### Cleaning up
```
kubectl delete -k ./
```

### Commands
```
// Forward port
kubectl -n default port-forward kubernetes-dashboard-7656945594-lj7xg 8443:8443


// Deployment stuff
kubectl get deployments
kubectl set image deployment.v1.apps/app03-deployment app03=qtmsm/service03:v1.0.6

kubectl autoscale deployment app03-deployment --max=5 --min=1 --cpu-percent=50
kubectl scale --replicas=3 deployment/app03-deployment
```

### Command line tool (kubectl)
- [https://kubernetes.io/docs/reference/kubectl/](https://kubernetes.io/docs/reference/kubectl/)
- [https://kubernetes.io/docs/reference/kubectl/cheatsheet/](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)