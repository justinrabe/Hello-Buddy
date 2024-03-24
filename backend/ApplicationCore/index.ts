import IGenAIConnector from '../Infrastructure/Interfaces/IGenAIConnector';
import GeminiConnector from '../Infrastructure/Connectors/GeminiConnector';

async function main (genAIConnector: IGenAIConnector) {
    const prompt = "Good Morning Buddy!";
    const response = await genAIConnector.sendMessage(prompt);
    console.log(response);
}

const genAIConnector= new GeminiConnector();
main(genAIConnector).catch(console.error);
