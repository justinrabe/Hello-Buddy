"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const GeminiConnector_1 = __importDefault(require("./Infrastructure/Connectors/GeminiConnector"));
const AppCore_1 = __importDefault(require("./ApplicationCore/AppCore"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const genAIConnector = new GeminiConnector_1.default();
const appCore = new AppCore_1.default(genAIConnector);
const port = process.env.PORT || 3000;
app.get("/", (req, res) => res.send("Express on Vercel"));
app.post('/message', async (req, res, next) => {
    try {
        const prompt = req.body.prompt;
        if (!prompt) {
            throw new Error('Prompt is required');
        }
        const response = await appCore.sendMessage(prompt);
        res.json(response);
    }
    catch (err) {
        next(err);
    }
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err.message });
});
app.listen(port, () => {
    console.log('Server is running on port 3000');
});
