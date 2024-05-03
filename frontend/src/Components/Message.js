import './css/Message.css';
import 'bootstrap';
const personaColorMap = {
    'StinkyBoy': '#702540',
    'Maton': '#2A4570',
    'Cocopups': '#8C452F',
    'MeYo': '#154B1A',
    'Buggy': '#402158'
}
const Message = ({ msg, persona } ) => (
    <div className={`message-container ${msg.type}`}>
        <div className={`message ${msg.type}`} style={{borderColor: personaColorMap[persona]}}>
            {msg.type === 'received' && <img src={`images/${persona}_ChatIcon.png`} alt="chat icon" className="chat-icon" />}
            <span className="message-text">{msg.content}</span>
        </div>
    </div>
);

export default Message;