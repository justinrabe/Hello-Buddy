import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState(null);

    const sendMessage = async () => {
        try {
            const res = await axios.post('http://localhost:3000/message', { prompt: message });
            setResponse(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={message} 
                onChange={e => setMessage(e.target.value)} 
            />
            <button onClick={sendMessage}>Send</button>
            {response && <p>{response}</p>}
        </div>
    );
};

export default Chat;