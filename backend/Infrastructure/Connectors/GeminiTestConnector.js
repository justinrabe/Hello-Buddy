// node --version # Should be >= 18
// npm install @google/generative-ai

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const MODEL_NAME = "tunedModels/hellobuddyv1-78j2o4u77460";
  const API_KEY = process.env.GOOGLE_GENAI_KEY;
  
  async function run() {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 8192,
    };
  
    const safetySettings = [
    ];
  
    const parts = [
    ];
    
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [Array] }],
      generationConfig,
      safetySettings,
    });
  
    const response = result.response;
    console.log(response.text());
  }
  
  run();