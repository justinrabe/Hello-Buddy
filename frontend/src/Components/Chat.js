import React, { useState } from 'react';
import axios from 'axios';
import Message from './Message';
import SendMessageButton from './SendMessage';
const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const helloBuddyUrl = process.env.HELLO_BUDDY_URL;
    console.log(`Hello Buddy URL: ${helloBuddyUrl}`);
    const sendMessage = async () => {
        setMessage('Sending...');
        try {
            console.log(`Sending message: ${message}`);
            const res = await axios.post(helloBuddyUrl, { prompt: message });
            console.log(`Received response: ${res.data}`);
            setMessages([...messages, { type: 'sent', content: message }, { type: 'received', content: res.data }]);
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
            <div style={{ overflowY: 'auto', flexGrow: 1, display: 'flex', flexDirection: 'column-reverse', backgroundColor: '#749977'  }}>
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