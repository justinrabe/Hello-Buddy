import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        try {
            const res = await axios.post('http://localhost:3000/message', { prompt: message });
            setMessages([...messages, { type: 'sent', content: message }, { type: 'received', content: res.data }]);
            setMessage('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ overflowY: 'auto', flexGrow: 1 }}>
                {messages.map((msg, index) => (
                    <div key={index} style={{ textAlign: msg.type === 'sent' ? 'right' : 'left' }}>
                        <div style={{
                            display: 'inline-block',
                            padding: '10px',
                            borderRadius: '10px',
                            margin: '5px',
                            background: msg.type === 'sent' ? '#0084ff' : '#f0f0f0',
                            color: msg.type === 'sent' ? 'white' : 'black'
                        }}>
                            {msg.content}
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', padding: '10px' }}>
                <input 
                    type="text" 
                    value={message} 
                    onChange={e => setMessage(e.target.value)} 
                    style={{ flexGrow: 1, marginRight: '10px' }}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;