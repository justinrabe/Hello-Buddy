import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Message from './Message';
import SendMessageButton from './SendMessage';
const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const location = useLocation();
    const persona = location.state.persona;

    const helloBuddyBackendUrl = process.env.REACT_APP_HELLO_BUDDY_BACKEND_URL || 'http://localhost:3000';
    const helloBuggyMessageUrl = helloBuddyBackendUrl + '/message';
    console.log(`Hello Buggy Message URL: ${helloBuggyMessageUrl}`);
    const sendMessage = async () => {
        if (!message) return;
        setMessages(prevMessages => [...prevMessages, { type: 'sent', content: message }]);
        setMessage('Sending...');
        try {
            console.log(`Sending message: ${message}`);
            const res = await axios.post(helloBuggyMessageUrl, { prompt: message, persona: persona },{ withCredentials: true });
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
        <div style={{ 
            display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#749977' 
            }}>
            <div style={{ overflowY: 'auto', flexGrow: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#749977'  }}>
                {messages.map((msg, index) => (
                    <Message key={index} msg={msg} />
                ))}
            </div>
            <div style={{ display: 'flex', padding: '10px', backgroundColor: '#749977'  }}>
                <input 
                    type="text" 
                    value={message} 
                    onChange={e => setMessage(e.target.value)}
                    onKeyDown = {e => {
                        if (e.key === 'Enter') {
                            sendMessage();
                            e.preventDefault(); // Prevents the addition of a new line in the input after pressing 'Enter'
                        }
                    }}
                    style={{ flexGrow: 1, marginRight: '10px' }}
                />
                <SendMessageButton onClick={sendMessage} />
            </div>
        </div>
    );
};

export default Chat;