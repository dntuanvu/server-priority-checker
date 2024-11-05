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
exports.ServerService = void 0;
class ServerService {
    constructor(serverClient) {
        this.serverClient = serverClient;
    }
    findLowestPriorityServer(servers) {
        return __awaiter(this, void 0, void 0, function* () {
            const onlineServers = yield Promise.all(servers.map((server) => __awaiter(this, void 0, void 0, function* () {
                const isOnline = yield this.serverClient.isServerOnline(server);
                return isOnline ? server : null;
            })));
            const availableServers = onlineServers.filter((server) => server !== null);
            if (availableServers.length === 0) {
                throw new Error("No servers are online");
            }
            return availableServers.reduce((lowest, server) => server.priority < lowest.priority ? server : lowest);
        });
    }
}
exports.ServerService = ServerService;
