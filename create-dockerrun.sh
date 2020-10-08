cat <<EOF > Dockerrun.aws.json
{
  "AWSEBDockerrunVersion": "1",
  "Image": {
    "Name": "$DOCKER_GROUP/$DOCKER_REPO:latest",
    "Update": "true"
  },
  "Authentication": {
    "Bucket": "hl-dockercfg",
    "Key": "index.docker.io/config.json"
  },
  "Volumes": [
    {
      "HostDirectory": "/var/www/static",
      "ContainerDirectory": "/code/static"
    }
  ],
  "Ports": [
    {
      "ContainerPort": 8000
    }
  ]
}
EOF