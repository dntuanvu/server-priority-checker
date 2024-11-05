"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerController = void 0;
const ServerService_1 = require("../services/ServerService");
const ServerClient_1 = require("../clients/ServerClient");
class ServerController {
    constructor() {
        const serverClient = new ServerClient_1.ServerClient();
        this.serverService = new ServerService_1.ServerService(serverClient);
    }
    getLowestPriorityServer(servers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.serverService.findLowestPriorityServer(servers);
        });
    }
}
exports.ServerController = ServerController;
