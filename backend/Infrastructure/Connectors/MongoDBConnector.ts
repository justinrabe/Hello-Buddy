import { IDatabaseConnector } from '../Interfaces/IDatabaseConnector';
import { MongoClient } from 'mongodb';

export class MongoDBConnector implements IDatabaseConnector {
    private client: MongoClient;

    constructor(private url: string) {
        this.client = new MongoClient(this.url);
    }
    async connect(): Promise<void> {
        await this.client.connect();
    }

    async disconnect(): Promise<void> {
        await this.client.close();
    }
}