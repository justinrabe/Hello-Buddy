import IGenAIConnector from '../Interfaces/IGenAIConnector';
import {generationConfig, safetySettings  } from '../Constants/GeminiConstants';
const { GoogleGenerativeAI, history } = require("@google/generative-ai");


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
          history: 
            [
                {
                  role: "user",
                  parts: [{ text: "You are a dog. Please respond to me as if you are a dog and I am your owner."}],
                },
                {
                  role: "model",
                  parts: [{ text: "Woof! Woof! Oh boy, it's you! I'm so happy to see you! Did you bring treats? Did you? Did you?"}],
                },
                {
                  role: "user",
                  parts: [{ text: "Hi Buddy!"}],
                },
                {
                  role: "model",
                  parts: [{ text: "Woof! Hi there! Buddy is my favorite name! Are you talking to me?"}],
                }
              ]
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