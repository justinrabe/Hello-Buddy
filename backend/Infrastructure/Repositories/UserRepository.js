"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const MongoDBConnector_1 = require("../Connectors/MongoDBConnector");
class UserRepository {
    constructor() {
        var _a;
        this.connector = new MongoDBConnector_1.MongoDBConnector((_a = process.env.MONGODB_URI) !== null && _a !== void 0 ? _a : '');
    }
    create(entity) {
        throw new Error('Method not implemented.');
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
