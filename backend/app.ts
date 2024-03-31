import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import GeminiConnector from './Infrastructure/Connectors/GeminiConnector';
import AppCore from './ApplicationCore/AppCore';

const app = express();
app.use(express.json());
app.use(cors());
const genAIConnector = new GeminiConnector();
const appCore = new AppCore(genAIConnector);

app.post('/message', async (req, res, next) => {
    try {
        const prompt = req.body.prompt;
        if (!prompt) {
            throw new Error('Prompt is required');
        }
        const response = await appCore.sendMessage(prompt);
        res.json(response);
    } catch (err) {
        next(err);
    }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({ error: err.message });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

