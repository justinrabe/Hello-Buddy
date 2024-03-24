import VertexConnector from '../Infrastructure/Connectors/VertexConnector';
import IGenAIConnector from '../Infrastructure/Interfaces/IGenAIConnector';

async function main (genAIConnector: IGenAIConnector) {
    const prompt = "Good Morning Buddy!";
    const response = await genAIConnector.generateContent(prompt);
}

const genAIConnector= new VertexConnector();
main(genAIConnector).catch(console.error);
