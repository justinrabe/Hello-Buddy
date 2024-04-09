interface IGenAIConnector {
    startChat(persona: string): Promise<any>;
    sendMessage(content: string): Promise<any>;
}

export default IGenAIConnector;