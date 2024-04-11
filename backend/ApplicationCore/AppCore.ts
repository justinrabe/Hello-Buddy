import IGenAIConnector from '../Infrastructure/Interfaces/IGenAIConnector';
import ChatService from '../ApplicationCore/Services/ChatService';

class ApplicationCore {
    private chatService: ChatService;

    constructor(connector: IGenAIConnector) {
        this.chatService = new ChatService(connector);
    }

    public async sendMessage(prompt: string) {
        return this.chatService.sendMessage(prompt);
    }

    public async startChat(persona: string) {
        return this.chatService.startChat(persona);
    }
}

export default ApplicationCore;