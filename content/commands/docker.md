---
title: "Docker"
description: "Docker commands"
date: 2021-03-04
tags: ["docker"]
---

## Related

- [Docker (Setup)](/setups/docker)

## Resources

| Description                                 | Command                                                                                                                           |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| List all docker containers    | `docker ps -a`                                                                                          |
| Run docker "image" and map port "CONTAINER_PORT" to "MAPPED_PORT"                                   | `docker run -p [MAPPED_PORT]:[CONTAINER_PORT] [IMAGE]`                                                                                        |
| Pull an "image" from a docker registry                      | `docker pull [IMAGE]`                                                                                                         |
| Build image from a dockerfile with a name (format name:tag)    | `docker build -t [NAME] [PATH_TO_DOCKERFILE]` |
| Stop container "CONTAINER_ID"                           | `docker stop [CONTAINER_ID]`                                                                                                                       |
