interface IGenAIConnector {
    sendMessage(content: string): Promise<any>;
}

export default IGenAIConnector;