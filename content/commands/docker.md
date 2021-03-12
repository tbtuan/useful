---
title: "Docker"
description: "Docker commands"
date: 2021-03-12
tags: ["docker"]
---

## Related

- [Docker (Setup)](/collections/docker)

## Resources

| Description        | Command    |
| ------------- | ------------------------------------------------------------------------- |
| Build image from a dockerfile with a name (format name:tag)    | `docker build -t [name] [path_to_dockerfile]` |
| Show logs of a container | `docker logs [container_id]` |
| List all docker containers   | `docker ps -a`   |
| Pull an "image" from a docker registry                      | `docker pull [image]`  |
| Remove container | `docker rm [container_id]` |
| Stop and remove container | `docker rm -f [container_id]` |
| Run docker "image" and map port "container_port" to "mapped_port" | `docker run -p [mapped_port]:[container_port] [image]` |
| Run docker (detached mode) | `docker run -d [image]` |
| Stop container "container_id" | `docker stop [container_id]` |
| Stop container "image_name" | `docker stop [image_name]` |
