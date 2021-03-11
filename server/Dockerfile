FROM golang:latest

EXPOSE 50888

# Install grpc
RUN go get -u google.golang.org/grpc && \
    go get -u github.com/golang/protobuf/protoc-gen-go &&\
    go get -u google.golang.org/grpc/cmd/protoc-gen-go-grpc

# Install protoc and zip system library
RUN apt-get update && apt-get install -y zip && \
    mkdir /opt/protoc && cd /opt/protoc && wget https://github.com/protocolbuffers/protobuf/releases/download/v3.15.5/protoc-3.15.5-linux-x86_64.zip && \
    unzip protoc-3.15.5-linux-x86_64.zip

ENV PATH=$PATH:$GOPATH/bin:/opt/protoc/bin

WORKDIR /grpc

COPY . .
RUN mkdir -p ./server/messagepb 

RUN cd shared/protos && \
    protoc --go_out=../../server/messagepb --go_opt=paths=source_relative --go-grpc_out=../../server/messagepb --go-grpc_opt=paths=source_relative message.proto

ENTRYPOINT cd server && go run server.go
