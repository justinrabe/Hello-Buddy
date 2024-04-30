import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import GeminiConnector from './Infrastructure/Connectors/GeminiConnector';
import AppCore from './ApplicationCore/AppCore';

const personas = ['StinkyBoy', 'Maton', 'MeYo', 'Buggy', 'Cocopups'];

const appCores: { [persona: string]: AppCore } = {};

personas.forEach(async persona => {
    const appCore = new AppCore(new GeminiConnector());
    await appCore.startChat(persona);
    appCores[persona] = appCore;
});

const helloBuddyFrontEndUrl = 'https://hello-buddy.app';
const app = express();
app.use(express.json());
app.use(cors({
    origin: "*",
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
    } catch (err) {
        next(err);
    }
});

app.post('/reset', (req, res) => {
    personas.forEach(async persona => {
        const appCore = new AppCore(new GeminiConnector());
        await appCore.startChat(persona);
        appCores[persona] = appCore;
    });
    res.json({ message: 'All chats have been reseted' });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({ error: err.message });
});

app.listen(port, () => {
    console.log('Server is running on port 3000');
});

