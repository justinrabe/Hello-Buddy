"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GeminiConnector_1 = __importDefault(require("../Infrastructure/Connectors/GeminiConnector"));
const ChatService_1 = __importDefault(require("../ApplicationCore/Services/ChatService"));
async function main(chat) {
    const prompt = "Good Morning Buddy!";
    const response = await chat.sendMessage(prompt);
    console.log(response);
}
const genAIConnector = new GeminiConnector_1.default();
const chatService = new ChatService_1.default(genAIConnector);
main(chatService).catch(console.error);
