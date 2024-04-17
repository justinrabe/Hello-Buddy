import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './LandingPage.css';
import CookieContext from './CookieContext';
const LandingPage = () => {
    const context = useContext(CookieContext);
    axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    const personas = ['StinkyBoy', 'Maton', 'MeYo', 'Buggy', 'Cocopups'];
    const helloBuddyBackendUrl = process.env.REACT_APP_HELLO_BUDDY_BACKEND_URL || 'http://localhost:3000';
    const helloBuddyFrontendUrl = process.env.PUBLIC_URL || 'http://localhost:3001';
    console.log(`Hello Buddy frontend URL: ${helloBuddyFrontendUrl}`)
    const startHelloBuddy = helloBuddyBackendUrl + '/start';
    const [activeButton, setActiveButton] = useState(null);
    console.log(`Start Hello Buddy URL: ${startHelloBuddy}`);
    const startChat = async (p) => {
        console.log(`Starting chat with ${p}`)

        try {
            const res = await axios.post(startHelloBuddy, { persona: p }, { withCredentials: true });
            context.setCookie(res.headers['set-cookie']);
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
                        src={`${process.env.PUBLIC_URL}/images/${persona}${persona === activeButton ? '_Profile_Hover' : '_Profile_Default'}.png`}
                        alt={persona}
                    />
                </button>
            ))}
            <Link to="/chat"></Link>
        </div>
    );
}

export default LandingPage;