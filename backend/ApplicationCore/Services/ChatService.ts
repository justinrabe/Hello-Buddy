import IService from '../Interfaces/IService';
import IGenAIConnector from '../../Infrastructure/Interfaces/IGenAIConnector';
export class ChatService implements IService {
    private genAIConnector: IGenAIConnector;

    constructor(genAIConnector: IGenAIConnector) {
        this.genAIConnector = genAIConnector;
    }

    async startChat(persona: string): Promise<any> {
        return await this.genAIConnector.startChat(persona);
    }

    async sendMessage(content: string): Promise<any> {
        return await this.genAIConnector.sendMessage(content);
    }
}
export default ChatService;