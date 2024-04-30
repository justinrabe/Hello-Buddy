# Hello Buddy!

Hello Buddy! is a full stack web app that allows users to interact with virtual representations of their pets. 

## Features

- Chat with carefully curated Buddies with their own personalities!
- Virtual companionship for pets who have passed on
- Future plans for user-created digital companions

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/hello-buddy.git
```

## Usage

go to backend/Infrastructure/Connectors/GeminiConnector.ts. You will need to generate your own Google AI Studio API Key: https://aistudio.google.com/app/apikey

After you generate your API Key, save it as an environment variable.

Navigate to the backend directory:

```bash
cd backend
```

compile Typescript files:

```bash
npx tsc
```

Start the backend server with this command:

```bash
node app.js
```

Start a new terminal window. Navigate to the frontend directory:

```bash
cd frontend
```

Start the Web UI with:


```bash
npm start
```
