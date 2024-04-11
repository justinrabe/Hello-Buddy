import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './LandingPage.css';
const LandingPage = () => {
    const navigate = useNavigate();
    const personas = ['StinkyBoy', 'Maton', 'MeYo', 'Buggy', 'Cocopups'];
    const helloBuddyUrl = 'http://localhost:3000';
    const startHelloBuddy = helloBuddyUrl + '/start';
    const [activeButton, setActiveButton] = useState(null);
    console.log(`Start Hello Buddy URL: ${startHelloBuddy}`);
    const startChat = async (p) => {
        console.log(`Starting chat with ${p}`)

        try {
            const res = await axios.post(startHelloBuddy, { persona: p }, { withCredentials: true });
            console.log(`Received response: ${res.data}`);
        }

        catch (error) {
            console.error(`Error starting chat: ${error}`);
        }
        
        navigate('/chat');
    }

    return (
        <div className="landing-page">
            {personas.map((persona, index) => (
                <button
                    key={index}
                    onMouseEnter={() => setActiveButton(persona)}
                    onMouseLeave={() => setActiveButton(null)}
                    onClick={() => {
                        setActiveButton(persona);
                        startChat(persona);
                    }}
                >
                    <img
                        src={`http://localhost:3001/images/${persona}${persona === activeButton ? '_Profile_Hover' : '_Profile_Default'}.png`}
                        alt={persona}
                    />
                </button>
            ))}
            <Link to="/chat"></Link>
        </div>
    );
}

export default LandingPage;