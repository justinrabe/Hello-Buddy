const Message = ({ msg }) => (
    <div style={{ textAlign: msg.type === 'sent' ? 'right' : 'left' }}>
        <div style={{
            display: 'inline-block',
            padding: '10px',
            borderRadius: '10px',
            margin: '5px',
            background: msg.type === 'sent' ? '#0084ff' : '#f0f0f0',
            color: msg.type === 'sent' ? 'white' : 'black'
        }}>
            {msg.content}
        </div>
    </div>
);

export default Message;