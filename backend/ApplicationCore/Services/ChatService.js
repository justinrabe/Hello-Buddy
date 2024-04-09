"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
class ChatService {
    constructor(genAIConnector) {
        this.genAIConnector = genAIConnector;
    }
    async startChat(persona) {
        return await this.genAIConnector.startChat(persona);
    }
    async sendMessage(content) {
        return await this.genAIConnector.sendMessage(content);
    }
}
exports.ChatService = ChatService;
exports.default = ChatService;
