import { Server } from '../models/Server';
import { ServerService } from '../services/ServerService';
import { ServerClient } from '../clients/ServerClient';

export class ServerController {
  private serverService: ServerService;

  constructor() {
    const serverClient = new ServerClient();
    this.serverService = new ServerService(serverClient);
  }

  async getLowestPriorityServer(servers: Server[]): Promise<Server> {
    return this.serverService.findLowestPriorityServer(servers);
  }
}
