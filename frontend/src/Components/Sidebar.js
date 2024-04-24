import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Sidebar.css'
function Sidebar() {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);

    return (
        <>
            <div className="sidebar-container">
                <button 
                onClick={handleToggle}
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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/">Source Code</Link></li>
                            <li><Link to="/">Hackathon</Link></li>
                            <li><Link to="/">Gemini</Link></li>
                        </ul>
                    </div>
                )}
            </div>
            
            {show && <div className="overlay"></div>}
        </>
    );
}

export default Sidebar;