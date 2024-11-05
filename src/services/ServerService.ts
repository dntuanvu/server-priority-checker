import { Server } from '../models/Server';
import { ServerClient } from '../clients/ServerClient';

export class ServerService {
  private serverClient: ServerClient;

  constructor(serverClient: ServerClient) {
    this.serverClient = serverClient;
  }

  async findLowestPriorityServer(servers: Server[]): Promise<Server> {
    const onlineServers = await Promise.all(
      servers.map(async server => {
        const isOnline = await this.serverClient.isServerOnline(server);
        return isOnline ? server : null;
      })
    );

    const availableServers = onlineServers.filter((server): server is Server => server !== null);

    if (availableServers.length === 0) {
      throw new Error("No servers are online");
    }

    return availableServers.reduce((lowest, server) =>
      server.priority < lowest.priority ? server : lowest
    );
  }
}
