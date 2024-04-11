export interface ChatMessage {
    role: 'user' | 'model';
    parts: { text: string }[];
}

export default ChatMessage;