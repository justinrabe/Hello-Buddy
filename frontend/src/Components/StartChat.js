import React from 'react';
import axios from 'axios';
const StartChat = () => {
    const personas = ['StinkyBoy', 'Maton', 'MeYo', 'Buggy', 'Cocopups'];
    const helloBuddyUrl = 'http://localhost:3000';
    console.log(`Hello Buddy URL: ${process.env.REACT_APP_HELLO_BUDDY_URL}`);
    console.log(`Hello Buddy URL: ${helloBuddyUrl}`);
    const startHelloBuddy = helloBuddyUrl + '/start';
    console.log(`Start Hello Buddy URL: ${startHelloBuddy}`);
    const startChat = async (p) => {
        console.log(`Starting chat with ${p}`)
        const res = await axios.post(startHelloBuddy, { persona: p }, { withCredentials: true });
        console.log(`Received response: ${res.data}`);
        const data = await res.data;
    }

    return (
        <div>
            {personas.map((persona, index) => (
                <button key={index} onClick={() => startChat(persona)}>
                    {persona}
                </button>
            ))}
        </div>
    );
}

export default StartChat;