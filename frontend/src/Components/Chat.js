import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import Message from './Message';
import SendMessageButton from './SendMessage';
import logo from '../images/Logo.png';
import 'bootstrap';
import './css/Chat.css';

const personaColorMap = {
    'StinkyBoy': '#702540',
    'Maton': '#2A4570',
    'Cocopups': '#8C452F',
    'MeYo': '#154B1A',
    'Buggy': '#402158'
}
const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const location = useLocation();
    const persona = location.state.persona;
    console.log(`Chatting with ${persona}`);
    const helloBuddyBackendUrl = process.env.REACT_APP_HELLO_BUDDY_BACKEND_URL || 'http://localhost:3000';
    const helloBuggyMessageUrl = helloBuddyBackendUrl + '/message';
    console.log(`Hello Buggy Message URL: ${helloBuggyMessageUrl}`);
    const sendMessage = async () => {
        if (!message) return;
        setMessages(prevMessages => [...prevMessages, { type: 'sent', content: message }]);
        setMessage('Sending...');
        try {
            console.log(`Sending message: ${message}`);
            const res = await axios.post(helloBuggyMessageUrl, { prompt: message, persona: persona });
            console.log(`Received response: ${res.data}`);
            const data = await res.data;
            setMessages(prevMessages => [...prevMessages, { type: 'received', content: data }]);
            setMessage('');
        } catch (error) {
            console.error(`Error sending message: ${error}`);
            setMessage('Uh oh! cannot contact Buddy.');
        }
    };

    return (
        <div className={`chat-container ${persona}`}>
            <Link to="/" className="logo-link">
                <img className="logo-container" src={logo} alt="Hello Buddy!" />
            </Link>
            <div className="messages-container">
                {messages.map((msg, index) => (
                    <Message key={index} msg={msg} persona={persona}/>
                ))}
            </div>
            <div className="input-container">
                <input 
                    type="text" 
                    value={message} 
                    onChange={e => setMessage(e.target.value)}
                    onKeyDown = {e => {
                        if (e.key === 'Enter') {
                            sendMessage();
                            e.preventDefault();
                        }
                    }}
                    className="input-field"
                    style={{borderColor: personaColorMap[persona]}}
                    placeholder="Type a message to talk to Buddy..."
                />
                <SendMessageButton className="send-button" onClick={sendMessage} p={location.state.persona} />
            </div>
        </div>
    );
};

export default Chat;