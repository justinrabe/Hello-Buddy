import './css/Message.css';

const Message = ({ msg }) => (
    <div className={`message-container ${msg.type}`}>
        <div className={`message ${msg.type}`}>
            {msg.content}
        </div>
    </div>
);

export default Message;