import IGenAIConnector from '../Infrastructure/Interfaces/IGenAIConnector';
import GeminiConnector from '../Infrastructure/Connectors/GeminiConnector';
import ChatService from '../ApplicationCore/Services/ChatService';
async function main (chat: ChatService) {
    const prompt = "Good Morning Buddy!";
    const response = await chat.sendMessage(prompt);
    console.log(response);
}

const genAIConnector = new GeminiConnector();
const chatService = new ChatService(genAIConnector);
main(chatService).catch(console.error);