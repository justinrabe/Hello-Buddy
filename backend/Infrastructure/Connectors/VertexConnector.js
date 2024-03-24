"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { VertexAI } = require('@google-cloud/vertexai');
class VertexConnector {
    constructor() {
        this.client = new VertexAI({
            project: 'hello-buddy-418103',
            location: 'us-central-1'
        });
        this.model = this.client.getGenerativeModel({
            model: 'gemini-1.0-pro'
        });
    }
    async generateContent(content) {
        const result = await this.model.generateContent(content);
        return await result.response.text();
    }
}
exports.default = VertexConnector;
