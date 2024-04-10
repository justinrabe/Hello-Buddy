import IGenAIConnector from '../Interfaces/IGenAIConnector';
import {generationConfig, safetySettings  } from '../Constants/GeminiConstants';
import {personas} from '../Constants/Personas';
const { GoogleGenerativeAI, history } = require("@google/generative-ai");

class GeminiConnector implements IGenAIConnector {
    private readonly gemini: any;
    private readonly model: any;
    private chat: any;

    constructor( ) {
        this.gemini = new GoogleGenerativeAI( process.env.GOOGLE_GENAI_KEY );
        this.model = this.gemini.getGenerativeModel ({ model: "gemini-1.0-pro" });
    }

    async startChat(persona: string): Promise<any> {
        const selectedPersona = personas.find(p => p.name === persona);
        const selectedPersonaHistory = selectedPersona?.history;
        if (selectedPersona) {
          //convert selectedPersona.history to json
          this.chat = this.model.startChat({
            generationConfig,
            safetySettings,
            history: selectedPersonaHistory
          });
        }
    } 

    async sendMessage(content: string): Promise<any> {
        const result = await this.chat.sendMessage(content);
        const response = await result.response;
        const text = response.text();
        return text;
    }
}

export default GeminiConnector;