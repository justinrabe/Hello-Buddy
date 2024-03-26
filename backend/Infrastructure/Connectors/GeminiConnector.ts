import IGenAIConnector from '../Interfaces/IGenAIConnector';
import {generationConfig, safetySettings, history } from '../Constants/GeminiConstants';
const { GoogleGenerativeAI } = require("@google/generative-ai");


class GeminiConnector implements IGenAIConnector {
    private readonly gemini: any;
    private readonly model: any;
    private readonly chat: any;

    constructor( ) {
        this.gemini = new GoogleGenerativeAI( process.env.GOOGLE_GENAI_KEY );
        this.model = this.gemini.getGenerativeModel ({ model: "gemini-1.0-pro" });

        this.chat = this.model.startChat({
          generationConfig,
          safetySettings,
          history
        });
    }

    async sendMessage(content: string): Promise<any> {
        const result = await this.chat.sendMessage(content);
        const response = await result.response;
        const text = response.text();
        return text;
    }
}

export default GeminiConnector;