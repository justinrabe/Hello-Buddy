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
        const db = this.connector.getClient().db('hello-buddy-dev');
        const collection = db.collection('Users');
        const result = await collection.insertOne(entity);
        return result.insertedId.toString();
    }
    async FindOneBy(key: keyof User, value: any): Promise<User | null> {
        const db = this.connector.getClient().db('hello-buddy-dev');
        const collection = db.collection('Users');
        const userDocument = await collection.findOne({ [key]: value });
        if (userDocument) {
            const user: User = {
                id: userDocument._id.toString(),
                email: userDocument.email,
                password: userDocument.password,
                createdAt: userDocument.createdAt,
                updatedAt: userDocument.updatedAt
            };
            return user;
        }
    
        return null;
    }
    async findMultipleBy(key: keyof User, value: any): Promise<User[]> {
        throw new Error('Method not implemented.');
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