import GeminiConnector from "../Connectors/GeminiConnector";

// Create a new instance of the GeminiConnector
const connector = new GeminiConnector();

var chat = connector.startChat("Buggy");

var message = connector.sendMessage("Hello, how are you?");
console.log(message);