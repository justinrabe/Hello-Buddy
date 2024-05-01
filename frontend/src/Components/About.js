import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png';
import stinkyBoy from '../images/StinkyBoy.png';
import maton from '../images/Maton.png';
import cocopups from '../images/Cocopups.png';
import meyo from '../images/Me-Yo.png';
import buggy from '../images/Bugs.png';
import './css/About.css';
function About() {
    return (
        <div className="about-container">
            <Link to="/" className="logo-link">
                <img className="logo-container" src={logo} alt="Hello Buddy!" />
            </Link>
            <h1 className="about-subtitle">Why did we create this app?</h1>
            <h2 className="about-content">
            We affectionately refer to all our pets as "Buddies," which inspired the name of our app, HELLO BUDDY! 
            Just as we greet our pets with a warm "hello" when we return home, our app embodies that same spirit of connection and companionship. <br /><br />

            When we return home, it's second nature to seek out our furry companions, sharing with them the events of our day and inquiring about theirs. 
            Engaging in these conversations, though they may be one-sided, brings a sense of connection as if our pets comprehend our words as much as we understand their silent (or not-so-silent) gestures. 
            There's a unique comfort in confiding in our loyal friends who love us unconditionally, their presence warming our hearts in ways only they can. <br /><br />

            But HELLO BUDDY! goes beyond mere conversation—it's a tool for empowerment. 
            With features like Buddy customization and virtual companionship for pets who have passed on, we're committed to ensuring that every user can experience the joy of connecting with their furry friends, both present and past. <br /><br />

            Looking ahead, our vision for HELLO BUDDY! includes empowering users to create their own digital companions. Share the cherished memories and distinctive traits of your beloved pet, and HELLO BUDDY!     
            will bring them to virtual life, courtesy of Google Gemini. Currently, we've personally designed the Buddy icons, with plans to introduce customization features, allowing users to recreate their pets faithfully and engage in meaningful conversations with them. 

            </h2>
            <div className="buddy-container">
                <h1 className="about-subtitle">Meet the furry friends that inspired the Buddies!</h1>
                <div className="buddy-row">
                    <div className="buddy-column">
                        <img className="buddy-image" src={stinkyBoy} alt="Buddy" />
                        <h2 className="buddy-name">STINKYBOY</h2>
                        <h3 className="buddy-description">West Highland White Terrier Mix</h3>
                        <h3 className="buddy-description">2006-2017</h3>
                    </div>
                    <div className="buddy-column">
                        <img className="buddy-image" src={maton} alt="Buddy" />
                        <h2 className="buddy-name">MATON</h2>
                        <h3 className="buddy-description">Poodle Mix</h3>
                        <h3 className="buddy-description">2009-2022</h3>
                    </div>
                    <div className="buddy-column">
                        <img className="buddy-image" src={cocopups} alt="Buddy" />
                        <h2 className="buddy-name">COCOPUPS</h2>
                        <h3 className="buddy-description">Jack Russell Terrier Mix</h3>
                        <h3 className="buddy-description">2009-2022</h3>
                    </div>
                    <div className="buddy-column">
                        <img className="buddy-image" src={meyo} alt="Buddy" />
                        <h2 className="buddy-name">ME-YO</h2>
                        <h3 className="buddy-description">Yorkshire Terrier</h3>
                        <h3 className="buddy-description">2012</h3>
                    </div>
                    <div className="buddy-column">
                        <img className="buddy-image" src={buggy}alt="Buddy" />
                        <h2 className="buddy-name">BUGS</h2>
                        <h3 className="buddy-description">"Big Corgi" Mix</h3>
                        <h3 className="buddy-description">2023</h3>
                    </div>
                </div>
            </div>
            <footer className="footer-container">
                Powered by Google Gemini
            </footer>
        </div>
    );
}

export default About;