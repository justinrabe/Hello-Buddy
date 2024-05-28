import { MongoDBConnector } from '../Connectors/MongoDBConnector';
import { IRepository } from '../Interfaces/IRepository';
import { Message } from '../../Domain/Models/Message';

export class MessageRepository implements IRepository<Message> {
    private connector: MongoDBConnector;

    constructor() {
        this.connector = new MongoDBConnector(process.env.MONGODB_URI ?? '');
    }
    create(entity: Message): Promise<string> {
        throw new Error('Method not implemented.');
    }
    getById(id: number): Promise<Message | null> {
        throw new Error('Method not implemented.');
    }
    getAll(): Promise<Message[]> {
        throw new Error('Method not implemented.');
    }
    update(id: number, entity: Message): Promise<void> {
        throw new Error('Method not implemented.');
    }
    delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }

}