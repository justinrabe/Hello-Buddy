import IGenAIService from '../Interfaces/IGenAIService';
const { ModelServiceClient } =
  require("@google-ai/generativelanguage");

class GeminiOAuthService implements IGenAIService {
  private readonly client: any;
  private readonly model: any;
  constructor() {
    this.client = new ModelServiceClient({});
    this.model = this.client.getModel({name: "tunedModels/hellobuddyv1-78j2o4u77460"});
  }

  async generateContent(content: string): Promise<any> {
    const result = await this.model.generateContent(content);
    return await result.response.text();
  }
}

export default GeminiOAuthService;


