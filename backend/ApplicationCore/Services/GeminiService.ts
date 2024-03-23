import IGenAIService from '../Interfaces/IGenAIService';
import { GoogleGenerativeAI } from "@google/generative-ai";

class GeminiService implements IGenAIService {
    private readonly gemini: any;
    private readonly model: any;

    constructor( auth: any ) {
        this.gemini = new GoogleGenerativeAI( auth );
        this.model = this.gemini.getGenerativeModel ({ model: "tunedModels/hellobuddyv1-78j2o4u77460" });
    }

    async generateContent(content: string): Promise<any> {
        const result = await this.model.generateContent(content);
        const response = await result.response;
        const text = response.text();
        return text;
    }
}

export default GeminiService;