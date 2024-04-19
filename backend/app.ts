import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import cors from 'cors';
import bcrypt from 'bcrypt';
import GeminiConnector from './Infrastructure/Connectors/GeminiConnector';
import AppCore from './ApplicationCore/AppCore';

declare module 'express-session' {
    export interface SessionData {
      persona?: string;
    }
  }

const personas = ['StinkyBoy', 'Maton', 'MeYo', 'Buggy', 'Cocopups'];

const appCores: { [persona: string]: AppCore } = {};

personas.forEach(async persona => {
    const appCore = new AppCore(new GeminiConnector());
    await appCore.startChat(persona);
    appCores[persona] = appCore;
});

var salt1 = bcrypt.genSaltSync();
var salt2 = bcrypt.genSaltSync();
var secret = bcrypt.hashSync(salt1 + salt2, 10);
const helloBuddyFrontEndUrl = 'http://localhost:3001';
const app = express();
app.use(express.json());
app.use(cors({
    origin: helloBuddyFrontEndUrl,
    credentials: true
}));
app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'none', // set to 'none' if your site is under a different domain
        domain: 'your-site.com' // replace with your site's domain
    }
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

