interface IGenAIService {
    generateContent(content: string): Promise<any>;
}

export default IGenAIService;