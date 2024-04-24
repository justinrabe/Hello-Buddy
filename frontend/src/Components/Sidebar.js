import React, { useState } from 'react';
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
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Source Code</li>
                            <li>Hackathon</li>
                            <li>Gemini</li>
                        </ul>
                    </div>
                )}
            </div>
            
            {show && <div className="overlay"></div>}
        </>
    );
}

export default Sidebar;