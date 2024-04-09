import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import cors from 'cors';
import GeminiConnector from './Infrastructure/Connectors/GeminiConnector';
import AppCore from './ApplicationCore/AppCore';

declare module 'express-session' {
    export interface SessionData {
      persona?: string;
    }
  }

const appCores : { [key: string]: AppCore } = {};

const app = express();
app.use(express.json());
app.use(cors());
app.use(session({
    secret: 'hello-buddy', // replace with your own secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // set to true if you're using https
}));

const port = process.env.PORT || 3000;
app.get("/", (req, res) => res.send("Hello-Buddy backend is running!"));

app.post('/start', async (req, res, next) => {
    try {
        const persona = req.body.persona;
        if (!persona) {
            throw new Error('Persona is required');
        }
        const appCore = new AppCore(new GeminiConnector());
        await appCore.startChat(persona);

        req.session.persona = persona;
        appCores[req.sessionID] = appCore;

        res.json({ message: 'Chat started' });
    }
    catch (err) {
        next(err);
    }
});

app.post('/message', async (req, res, next) => {
    try {
        const prompt = req.body.prompt;
        if (!prompt) {
            throw new Error('Prompt is required');
        }

        if (!appCores[req.sessionID]) {
            res.status(400).json({ error: 'Chat needs to be started before messaging.' });
            return;
        }
        
        const response = await appCores[req.sessionID].sendMessage(prompt);
        res.json(response);
    } catch (err) {
        next(err);
    }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({ error: err.message });
});

app.listen(port, () => {
    console.log('Server is running on port 3000');
});

