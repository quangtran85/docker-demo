## ECS Demo

### Create Stack
```
aws cloudformation create-stack --stack-name ecs-demo --template-body file://master.yml  --capabilities CAPABILITY_IAM
```

### Update Stack
```
aws cloudformation update-stack --stack-name ecs-demo --template-body file://master.yml 
```

### Delete Stack
```
aws cloudformation delete-stack --stack-name ecs-demo
```