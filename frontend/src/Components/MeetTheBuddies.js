import React from 'react';
import { Link } from 'react-router-dom';
import './css/MeetTheBuddies.css'
import logo from '../images/Logo.png';
import stinkyBoy from '../images/StinkyBoy.png';
import maton from '../images/Maton.png';
import cocopups from '../images/Cocopups.png';
import meyo from '../images/Me-Yo.png';
import buggy from '../images/Bugs.png';

const personas = [
    {
        name: 'StinkyBoy',
        description: 'StinkyBoy is the oldest Buddy of the group. He tends to be grumpy, but is still very loving and tender. Think Carl Fredricksen from the movie Up.',
        quote: '\"*Woof woof ... grumble grumble* Leave me alone, I\'m trying to sleep. *sigh* Fine, you can pet me. But just a little bit, and only behind the ears. And no *sniff sniff* what\'s that smell? Did you cook something for dinner? Possibly chicken? I guess you can drop some in my bowl. But only if you want to. I\'m not begging. I\'m just ... suggesting.\"',
        borderColor: '#702540'
    },
    {
        name: 'Maton',
        description: 'Maton is an energetic, gentle Buddy that cherishes being in people\'s company. He very much loves attention. He is a softie and loves being around others.',
        quote: '\“*Tail wags excitedly* Woof woof! You\'re here! Let\'s play, let\'s play! Throw the ball, throw the ball! Or maybe we could go for a walk? ORRRRR we can just watch a fun movie but instead I just stare at you? Oh, oh! Are you gonna scratch behind my ears? That\'s my favorite! *rolls over for belly rubs* Who\'s a good boy? Is it me? Is it me?\"',
        borderColor: '#2A4570'
    },
    {
        name: 'Cocopups',
        description: 'Cocopups is an old gentle soul. He is very patient, and relaxed. His favorite pastime is laying in the sun, or taking a nap on the couch.',
        quote: '\“*Yawns and stretches Woof*... hello there. Did you... did you just say my name? Cocopups? That\'s me. *Wags tail slowly* I was dreaming about taking a nice slow walk on the beach. Would you... *Yawns again* Would you like to scratch behind my ears?\”',
        borderColor: '#8C452F'
    },
    {
        name: 'MeYo',
        description: 'Me-Yo is a chubby Buddy that enjoys taking naps, eating, and cuddling. He has a hard time seeing now, but that doesn\'t stop him from knowing his way to his food bowl! Sometimes he prefers his alone time, but you can find him looking for others because he wants to know they\'re around.',
        quote: '\“*Wuff wuff!* Hooman! So glad you\'re home! Is it time for dinner yet? I\'m so hungry I could eat a whole... well, I could eat a lot! *sniff sniff* You smell like the outside. Did you bring me anything good? Maybe a treat? Come on, let\'s cuddle on the couch. It\'s nap time.\”',
        borderColor: '#154B1A'
    },
    {
        name: 'Buggy',
        description: 'Bugs is the youngest Buddy of the group. He absolutely loves playing with toys and always wants others to join him on the fun!! He is very smart but a little silly.',
        quote: '\"*Tail wags excitedly, tongue lolls out* Playtime? Is it playtime? *barks and runs in circles, dropping a squeaky toy at your feet* Throw it, throw it! Let\'s play fetch! *yips and bounces, chasing after the toy before you can even throw it* Hehehe, whoops! Got too excited! *rolls over for a belly rub*\"',
        borderColor: '#402158'
    }
]
function MeetTheBuddies() {
    return (
        <div className="meet-container">
            <Link to="/" className="logo-link">
                <img className="logo-container" src={logo} alt="Hello Buddy!" />
            </Link>
            <h1 className="meet-subtitle2">Meet the Buddies and learn more about their personalities!</h1>
            <div className="personality-container">
                {personas.map((persona, index) => (
                    <div className="personality-row" key={index}>
                        <img className="persona-image" src={`${process.env.PUBLIC_URL}/images/${persona.name}${'_Profile_Default'}.png`} alt="Persona" />
                        <div className="persona-description" style={{borderColor: persona.borderColor}}>
                            <p>{persona.description}</p>
                            <p>{persona.quote}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="buddy-container">
                <h1 className="meet-subtitle">Meet the furry friends that inspired the Buddies!</h1>
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
    )
}
export default MeetTheBuddies;