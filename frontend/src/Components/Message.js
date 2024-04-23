import './css/Message.css';
import 'bootstrap';
const Message = ({ msg, persona } ) => (
    <div className={`message-container ${msg.type}`}>
        <div className={`message ${msg.type}`}>
            {msg.type === 'received' && <img src={`images/${persona}_ChatIcon.png`} alt="chat icon" className="chat-icon" />}
            {msg.content}
        </div>
    </div>
);

export default Message;