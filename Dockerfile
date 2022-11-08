FROM node:16.0.0-slim

# usuário do container
USER node

WORKDIR /home/node/app

CMD [ "tail", "-f", "/dev/null" ]