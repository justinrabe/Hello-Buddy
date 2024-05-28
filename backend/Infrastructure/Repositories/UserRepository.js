"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const MongoDBConnector_1 = require("../Connectors/MongoDBConnector");
class UserRepository {
    constructor() {
        var _a;
        this.connector = new MongoDBConnector_1.MongoDBConnector((_a = process.env.MONGODB_URI) !== null && _a !== void 0 ? _a : 'mongodb://localhost:27017');
        this.connector.connect();
    }
    async create(entity) {
        const db = this.connector.getClient().db('hello-buddy-devf');
        const collection = db.collection('Users');
        const result = await collection.insertOne(entity);
        return result.insertedId.toString();
    }
    getById(id) {
        throw new Error('Method not implemented.');
    }
    getAll() {
        throw new Error('Method not implemented.');
    }
    update(id, entity) {
        throw new Error('Method not implemented.');
    }
    delete(id) {
        throw new Error('Method not implemented.');
    }
}
exports.UserRepository = UserRepository;
