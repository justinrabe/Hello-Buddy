import './css/Message.css';
import 'bootstrap';
const Message = ({ msg }) => (
    <div className={`message-container ${msg.type}`}>
        <div className={`message ${msg.type}`}>
            {msg.content}
        </div>
    </div>
);

export default Message;