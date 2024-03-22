import GeminiService from  './Services/GeminiService';

async function main () {
    const key = process.env.GOOGLE_GENAI_KEY;
    const geminiService = new GeminiService(key); 
    const prompt = "Testing out inputting a journal entry"
    const response = await geminiService.analyzeJournalEntry(prompt);
    console.log(response);
}

main().catch(console.error);