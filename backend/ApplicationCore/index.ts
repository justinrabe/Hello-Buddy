import GeminiService from  './Services/GeminiService';
import GeminiOAuthService from './Services/GeminiOAuthService';
import IGenAIService from './Interfaces/IGenAIService';

async function main (genAIService: IGenAIService) {
    const prompt = "Good Morning Buddy!"
    const response = await genAIService.generateContent(prompt);
    console.log(response);
}

const genAIService = new GeminiOAuthService();
main(genAIService).catch(console.error);
