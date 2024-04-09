"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChatService_1 = __importDefault(require("../ApplicationCore/Services/ChatService"));
class ApplicationCore {
    constructor(connector) {
        this.chatService = new ChatService_1.default(connector);
    }
    async sendMessage(prompt) {
        return this.chatService.sendMessage(prompt);
    }
    async startChat(persona) {
        return this.chatService.startChat(persona);
    }
}
exports.default = ApplicationCore;
