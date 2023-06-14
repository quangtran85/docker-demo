## DOCKER DEMO

### Build image
```
cd service01
docker build -f Dockerfile -t qtmsm/service01:v1.0.1 .

// or
docker build -f Dockerfile -t qtmsm/service01:v1.0.1 --target=prod .

// or using buildx which include push image
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 --target=prod -t <username>/<image>:latest --push .
```

### Push image
```
docker push qtmsm/service01:v1.0.1
```

### Using docker compose
```
docker compose -p demo-docker up -d
```

Rebuild a service
```
docker compose -p demo-docker up --build service03 -d
```
