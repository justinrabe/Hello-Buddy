"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const GeminiConnector_1 = __importDefault(require("./Infrastructure/Connectors/GeminiConnector"));
const AppCore_1 = __importDefault(require("./ApplicationCore/AppCore"));
const personas = ['StinkyBoy', 'Maton', 'MeYo', 'Buggy', 'Cocopups'];
const appCores = {};
personas.forEach(async (persona) => {
    const appCore = new AppCore_1.default(new GeminiConnector_1.default());
    await appCore.startChat(persona);
    appCores[persona] = appCore;
});
const helloBuddyFrontEndUrl = 'https://hello-buddy.vercel.app' || 'http://localhost:3001';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: helloBuddyFrontEndUrl,
    credentials: true
}));
const port = process.env.PORT || 3000;
app.get("/", (req, res) => res.send("Hello-Buddy backend is running!"));
app.post('/message', async (req, res, next) => {
    try {
        const prompt = req.body.prompt;
        const persona = req.body.persona;
        if (!prompt) {
            throw new Error('Prompt is required');
        }
        if (!persona) {
            throw new Error('Persona is required');
        }
        const response = await appCores[persona].sendMessage(prompt);
        res.json(response);
    }
    catch (err) {
        next(err);
    }
});
app.post('/reset', (req, res) => {
    personas.forEach(async (persona) => {
        const appCore = new AppCore_1.default(new GeminiConnector_1.default());
        await appCore.startChat(persona);
        appCores[persona] = appCore;
    });
    res.json({ message: 'All chats have been reseted' });
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err.message });
});
app.listen(port, () => {
    console.log('Server is running on port 3000');
});
