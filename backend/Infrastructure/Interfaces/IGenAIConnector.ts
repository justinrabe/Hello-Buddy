interface IGenAIConnector {
    generateContent(content: string): Promise<any>;
}

export default IGenAIConnector;