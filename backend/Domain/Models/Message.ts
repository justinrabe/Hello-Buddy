export interface Message {
    id: number;
    content: string;
    sender: string;
    receiver: string;
    createdAt: Date;
}