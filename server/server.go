package main

import (
	"fmt"
	"log"
	"math/rand"
	"net"

	"context"

	"github.com/salirezam/grpc-web/messagepb"
	"github.com/salirezam/grpc-web/weather"
	"google.golang.org/grpc"
)

type server struct {
	messagepb.UnimplementedMessageServer
}

func (*server) SayHello(context context.Context, req *messagepb.MessageRequest) (*messagepb.MessageResponse, error) {
	fmt.Println("Connect to weather service")

	var conn *grpc.ClientConn
	conn, err := grpc.Dial("server-weather:5000", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("did not connect: %s", err)
	}
	defer conn.Close()

	w := weather.NewWeatherServiceClient(conn)
	num := int32(rand.Intn(5))

	response, err := w.RequestCurrentWeatherData(context, &weather.WeatherRequest{Location: num})
	if err != nil {
		log.Fatalf("Error when calling RequestCurrentWeatherData: %s", err)
	}

	fmt.Println("Got a new Add request")
	message := req.GetMessage()
	helloMessage := fmt.Sprintf("Hello %s, \nTemperature in %s is %d degrees", message, response.Location, response.Temperature)
	result := &messagepb.MessageResponse{Result: helloMessage}
	return result, nil
}

func main() {
	fmt.Println("Starting go grpc server")
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
