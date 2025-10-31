# Docker Deployment Guide

## Local Development

### Build and run with Docker Compose
```bash
# Build and start the container
docker-compose up --build

# Run in background
docker-compose up -d --build

# Stop the container
docker-compose down
```

### Build and run manually
```bash
# Build the Docker image
docker build -t garageviet-policy .

# Run the container
docker run -p 80:80 garageviet-policy
```

## Production Deployment

The application will be available at `http://localhost:80` or `http://localhost`

## Docker Hub

The image is automatically built and pushed to Docker Hub at `quangdao9a2/garageviet-policy` when:
- Code is pushed to `main`, `master` or `develop` branches
- Pull requests are created

### Pull and run from Docker Hub
```bash
docker pull quangdao9a2/garageviet-policy:latest
docker run -p 80:80 quangdao9a2/garageviet-policy:latest
```

Or with docker-compose:
```bash
docker-compose up -d
```

## CI/CD Setup

To enable automatic Docker Hub deployment and server deployment, add these secrets and variables to your GitHub repository:

### Secrets:
- `DOCKER_USERNAME`: Your Docker Hub username (quangdao9a2)
- `DOCKER_PASSWORD`: Your Docker Hub password or access token
- `PASS_WORD`: Server password for SSH deployment (optional)
- `SSH_PRIVATE_KEY`: SSH private key for server access (optional)

### Variables:
- `HOST_PROD`: Production server hostname/IP
- `HOST_USERNAME`: SSH username for production server

### Deployment Flow:
1. **Build & Push**: Automatically builds and pushes Docker image to Docker Hub on push to main/develop/master branches
2. **Deploy**: Only runs on `main` or `master` branch pushes, deploys to production server via SSH

The deployment script will:
- Pull the latest image from Docker Hub
- Stop current containers
- Start new containers with updated image on port 80
- Clean up old Docker resources

## Manual Docker Hub Push

If you want to manually push to Docker Hub:

```bash
# Login to Docker Hub
docker login

# Build the image
docker build -t quangdao9a2/garageviet-policy:latest .

# Tag the image
docker tag quangdao9a2/garageviet-policy:latest quangdao9a2/garageviet-policy:latest

# Push to Docker Hub
docker push quangdao9a2/garageviet-policy:latest
```

