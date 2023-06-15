## ECS Demo

### Create Stack
```
aws cloudformation create-stack --stack-name demo --template-body file://master.yml  --capabilities CAPABILITY_IAM
```

### Update Stack
```
aws cloudformation update-stack --stack-name demo --template-body file://master.yml 
```

### Delete Stack
```
aws cloudformation delete-stack --stack-name ecs-demo
```

### Deployment
```
// scaling
aws ecs update-service --cluster <cluster-name> --service <service-name> --desired-count 2
aws ecs update-service --cluster demo-ECS-UDOBW2DD0J5E-ECSCluster-wxeg9ut5GK5N --service App02Service --desired-count 2

// update image
TASK_FAMILY=App02Service SERVICE_NAME=App02Service IMAGE=qtmsm/service02:v2.0.0 ECS_CLUSTER=demo-ECS-UDOBW2DD0J5E-ECSCluster-wxeg9ut5GK5N sh ./deploy.sh
```