export interface IRepository<T> {
    saveMessage(entity: T): Promise<void>;
    getMessageById(id: string): Promise<T | null>;
    getAll(): Promise<T[]>;
    delete(id: string): Promise<void>;
}