"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const GeminiConnector_1 = __importDefault(require("./Infrastructure/Connectors/GeminiConnector"));
const AppCore_1 = __importDefault(require("./ApplicationCore/AppCore"));
const connect_mongodb_session_1 = __importDefault(require("connect-mongodb-session"));
var appCores = {};
var salt1 = bcrypt_1.default.genSaltSync();
var salt2 = bcrypt_1.default.genSaltSync();
var secret = bcrypt_1.default.hashSync(salt1 + salt2, 10);
const helloBuddyFrontEndUrl = 'https://hello-buddy.vercel.app';
const MongoDBStore = (0, connect_mongodb_session_1.default)(express_session_1.default);
const mongoDbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
if (!process.env.MONGODB_URI) {
    console.log('MongoDB URI not found in environment variables. Using default URI: mongodb://localhost:27017');
}
const mongoDbStore = new MongoDBStore({
    uri: mongoDbURI,
    collection: 'sessions',
});
const app = (0, express_1.default)();
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: helloBuddyFrontEndUrl,
    credentials: true
}));
app.use((0, express_session_1.default)({
    secret: secret,
    resave: false,
    saveUninitialized: false,
    store: mongoDbStore,
    cookie: {
        secure: true,
        sameSite: 'none'
    }
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
        const appCore = new AppCore_1.default(new GeminiConnector_1.default());
        await appCore.startChat(persona);
        req.session.persona = persona;
        appCores[req.sessionID] = appCore;
        res.cookie('sessionID', req.sessionID, { httpOnly: true });
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
    }
    catch (err) {
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
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err.message });
});
app.listen(port, () => {
    console.log('Server is running on port 3000');
});
