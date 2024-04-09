"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GeminiConnector_1 = __importDefault(require("../Connectors/GeminiConnector"));
// Create a new instance of the GeminiConnector
const connector = new GeminiConnector_1.default();
var chat = connector.startChat("Buggy");
var message = connector.sendMessage("Hello, how are you?");
console.log(message);
