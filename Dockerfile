FROM node:16.10.0-slim

RUN apt update && apt install -y --no-install-recommends \
  git

# user container
USER node

WORKDIR /home/node/app

CMD [ "sh", "-c", "npm install && tail -f /dev/null" ]