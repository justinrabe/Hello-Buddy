"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeminiConstants_1 = require("../Constants/GeminiConstants");
const Personas_1 = require("../Constants/Personas");
const { GoogleGenerativeAI, history } = require("@google/generative-ai");
class GeminiConnector {
    constructor() {
        this.gemini = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_KEY);
        this.model = this.gemini.getGenerativeModel({ model: "gemini-1.0-pro" });
    }
    async startChat(persona) {
        const selectedPersona = Personas_1.personas.find(p => p.name === persona);
        const selectedPersonaHistory = selectedPersona === null || selectedPersona === void 0 ? void 0 : selectedPersona.history;
        if (selectedPersona) {
            //convert selectedPersona.history to json
            this.chat = this.model.startChat({
                generationConfig: GeminiConstants_1.generationConfig,
                safetySettings: GeminiConstants_1.safetySettings,
                history: selectedPersonaHistory
            });
        }
    }
    async sendMessage(content) {
        const result = await this.chat.sendMessage(content);
        const response = await result.response;
        const text = response.text();
        return text;
    }
}
exports.default = GeminiConnector;
