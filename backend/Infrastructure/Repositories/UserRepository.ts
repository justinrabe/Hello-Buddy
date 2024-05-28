import { MongoDBConnector } from '../Connectors/MongoDBConnector';
import { IRepository } from '../Interfaces/IRepository';
import { User } from '../../Domain/Models/User';

export class UserRepository implements IRepository<User> {
    private connector: MongoDBConnector;

    constructor() {
        this.connector = new MongoDBConnector(process.env.MONGODB_URI ?? 'mongodb://localhost:27017');
        this.connector.connect();
    }
    async create(entity: User): Promise<string> {
        const db = this.connector.getClient().db('hello-buddy-devf');
        const collection = db.collection('Users');
        const result = await collection.insertOne(entity);
        return result.insertedId.toString();
    }
    getById(id: number): Promise<User | null> {
        throw new Error('Method not implemented.');
    }
    getAll(): Promise<User[]> {
        throw new Error('Method not implemented.');
    }
    update(id: number, entity: User): Promise<void> {
        throw new Error('Method not implemented.');
    }
    delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }

}