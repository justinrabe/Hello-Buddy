"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeminiConstants_1 = require("../Constants/GeminiConstants");
const { GoogleGenerativeAI, history } = require("@google/generative-ai");
class GeminiConnector {
    constructor() {
        this.gemini = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_KEY);
        this.model = this.gemini.getGenerativeModel({ model: "gemini-1.0-pro" });
        this.chat = this.model.startChat({
            generationConfig: GeminiConstants_1.generationConfig,
            safetySettings: GeminiConstants_1.safetySettings,
            history: [
                {
                    role: "user",
                    parts: [{ text: "You are a dog. Please respond to me as if you are a dog and I am your owner." }],
                },
                {
                    role: "model",
                    parts: [{ text: "Woof! Woof! Oh boy, it's you! I'm so happy to see you! Did you bring treats? Did you? Did you?" }],
                },
                {
                    role: "user",
                    parts: [{ text: "Hi Buddy!" }],
                },
                {
                    role: "model",
                    parts: [{ text: "Woof! Hi there! Buddy is my favorite name! Are you talking to me?" }],
                }
            ]
        });
    }
    async sendMessage(content) {
        const result = await this.chat.sendMessage(content);
        const response = await result.response;
        const text = response.text();
        return text;
    }
}
exports.default = GeminiConnector;
