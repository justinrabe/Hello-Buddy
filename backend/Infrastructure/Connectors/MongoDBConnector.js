"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBConnector = void 0;
const mongodb_1 = require("mongodb");
class MongoDBConnector {
    constructor(url) {
        this.url = url;
        this.client = new mongodb_1.MongoClient(this.url);
    }
    async connect() {
        await this.client.connect();
    }
    async disconnect() {
        await this.client.close();
    }
}
exports.MongoDBConnector = MongoDBConnector;
