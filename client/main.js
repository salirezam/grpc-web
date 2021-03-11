const { MessageRequest } = require("./message_pb")
const { MessageClient } = require("./message_grpc_web_pb")
var client = new MessageClient('http://localhost:8080');

var request = new MessageRequest()

request.setMessage('John')

client.sayHello(request, {}, (err, response) => {
    // Set a response type of plain text for the response
    console.log("Result of request : ",response.getResult())
})