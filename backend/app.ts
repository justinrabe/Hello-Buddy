import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import cors from 'cors';
import bcrypt from 'bcrypt';
import GeminiConnector from './Infrastructure/Connectors/GeminiConnector';
import AppCore from './ApplicationCore/AppCore';
import connectMongoDBSession from 'connect-mongodb-session';


declare module 'express-session' {
    export interface SessionData {
      persona?: string;
    }
  }

var appCores : { [key: string]: AppCore } = {};
var salt1 = bcrypt.genSaltSync();
var salt2 = bcrypt.genSaltSync();
var secret = bcrypt.hashSync(salt1 + salt2, 10);
const helloBuddyFrontEndUrl = 'https://hello-buddy.vercel.app' || 'http://localhost:3001';

const MongoDBStore = connectMongoDBSession(session);
const mongoDbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
if (!process.env.MONGODB_URI) {
    console.log('MongoDB URI not found in environment variables. Using default URI: mongodb://localhost:27017');
}
const mongoDbStore = new MongoDBStore({
    uri: mongoDbURI, // Replace with your MongoDB URI
    collection: 'sessions' // Replace with your desired collection name
});
const app = express();
app.use(express.json());
app.use(cors({
    origin: helloBuddyFrontEndUrl,
    credentials: true
}));
app.use(session({
    secret: secret,
    resave: true,
    saveUninitialized: true,
    store: mongoDbStore
}));

const port = process.env.PORT || 3000;
app.get("/", (req, res) => res.send("Hello-Buddy backend is running!"));

app.post('/start', async (req, res, next) => {

    console.log("Session: ", req.sessionID);
    try {
        const persona = req.body.persona;
        if (!persona) {
            throw new Error('Persona is required');
        }

        if (appCores[req.sessionID]) {
            res.status(400).json({ error: 'Chat already started.' });
            return;
        }
        const appCore = new AppCore(new GeminiConnector());
        await appCore.startChat(persona);

        req.session.persona = persona;
        appCores[req.sessionID] = appCore;

        res.json({ message: 'Chat started' });
        console.log("Chat started with persona: ", persona);
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
        console.log("Session: ", req.sessionID);
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

app.post('/purge', (req, res) => {
    appCores = {};
    res.json({ message: 'All chats purged' });
});

app.get('/appInfo', (req, res) => {
    console.log("Session: ", req.sessionID);
    console.log("Persona: ", req.session.persona);
    console.log("Current number of sessions running", Object.keys(appCores).length);

    res.json({ persona: req.session.persona, sessions: Object.keys(appCores).length });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({ error: err.message });
});

app.listen(port, () => {
    console.log('Server is running on port 3000');
});

