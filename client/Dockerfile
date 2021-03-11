FROM node:15.9.0

EXPOSE 3000
EXPOSE 8080

# Install protoc and zip system library
RUN apt-get update && apt-get install -y zip && \
    mkdir /opt/protoc && cd /opt/protoc && wget https://github.com/protocolbuffers/protobuf/releases/download/v3.15.1/protoc-3.15.1-linux-x86_64.zip && \
    unzip protoc-3.15.1-linux-x86_64.zip

ENV PATH=$PATH:$GOPATH/bin:/opt/protoc/bin

WORKDIR /src

COPY client/package*.json ./client/
RUN npm i

RUN npm i -g protoc-gen-grpc-web
RUN cd client && npm install

COPY client/* ./client/
RUN cd client && npx webpack ./main.js

COPY shared/protos/* ./shared/protos/

RUN cd shared/protos && \
    protoc message.proto --js_out=import_style=commonjs,binary:../../client --grpc-web_out=import_style=commonjs,mode=grpcwebtext:../../client

ENTRYPOINT cd client && node client.js
