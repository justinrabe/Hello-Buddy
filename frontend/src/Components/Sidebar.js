import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Sidebar.css'
function Sidebar() {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    const handleLinkClick = () => {
        setShow(false);
    };

    return (
        <>
            <div className="sidebar-container">
                <button 
                onClick={handleClick}
                className={show ? "button-open" : "button-default"}
                >
                    <img
                        className={show ? "button-open" : "button-default"}
                        src={ show ? `${process.env.PUBLIC_URL}/images/Sidebar_Open.png` : `${process.env.PUBLIC_URL}/images/Sidebar_Default.png`}
                        alt="Sidebar"
                    />
                </button>

                {show && (
                    <div className="sidebar">
                        <ul>
                        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                            <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
                            <li><a href="https://github.com/justinrabe/Hello-Buddy" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Source Code</a></li>
                            <li><a href="https://googleai.devpost.com/" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Hackathon</a></li>
                            <li><a href="https://gemini.google.com/app" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Gemini</a></li>
                        </ul>
                    </div>
                )}
            </div>
            
            {show && <div className="overlay"></div>}
        </>
    );
}

export default Sidebar;