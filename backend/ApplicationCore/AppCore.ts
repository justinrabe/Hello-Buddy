import IGenAIConnector from '../Infrastructure/Interfaces/IGenAIConnector';
import GeminiConnector from '../Infrastructure/Connectors/GeminiConnector';
import ChatService from '../ApplicationCore/Services/ChatService';

class ApplicationCore {
    private chatService: ChatService;

    constructor(connector: IGenAIConnector) {
        this.chatService = new ChatService(connector);
    }

    public async sendMessage(prompt: string) {
        return this.chatService.sendMessage(prompt);
    }
}

export default ApplicationCore;