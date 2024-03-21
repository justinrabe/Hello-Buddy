import { GoogleGenerativeAI } from "@google/generative-ai";
const key = process.env.GOOGLE_GENAI_KEY;
const genAI = new GoogleGenerativeAI( key );

const model = genAI.getGenerativeModel ({ model: "gemini-pro" })

const prompt = "Analyze this journal entry";
const result = async() => {
    await model.generateContent(prompt);
} 

