import ChatMessage from "./ChatMessage";

export interface Persona {
    name: string,
    history: ChatMessage[];
}

export default Persona;