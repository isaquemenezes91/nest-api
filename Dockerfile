FROM node:19-slim  

WORKDIR /home/node/app

CMD [ "tal"," -f ", "/dev/null" ]