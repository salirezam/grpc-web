package main

import(
	"context"
	"fmt"
	"log"
	"net"

	"github.com/salirezam/grpc-web/messagepb"
	"google.golang.org/grpc"
)

type server struct{
	messagepb.UnimplementedMessageServer
}

func (*server) SayHello(context context.Context, req *messagepb.MesaageRequest) (*messagepb.MessageResponse, error) {
	fmt.Println("Got a new Add request")
	message := req.GetMessage()
	helloMessage := fmt.Sprintf("Hello %s", message)
	result := &messagepb.MessageResponse{Result: helloMessage}
	return result, nil
}

func main() {
	fmt.Println("Starting go drpc server")
	lis, err := net.Listen("tcp", "0.0.0.0:50888")

	if err != nil {
		log.Fatalf("Error while listening : %v", err)
	}
 
	s := grpc.NewServer()
	messagepb.RegisterMessageServer(s, &server{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("Error while serving : %v", err)
	}

}