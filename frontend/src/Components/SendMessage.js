import React from 'react';
import './css/SendMessage.css';
import 'bootstrap';
const SendMessageButton = ({ onClick, p }) => {
    const buddy = p || 'PawPrint';
    return (
        <button className="send-button" onClick={onClick}>
            <img
                className="send-button-image"
                src={`${process.env.PUBLIC_URL}/images/${buddy}_Send.png`}
                alt={buddy}
            />
        </button>
    );
};

export default SendMessageButton;