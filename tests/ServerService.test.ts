import { ServerService } from '../src/services/ServerService';
import { ServerClient } from '../src/clients/ServerClient';
import { Server } from '../src/models/Server';

jest.mock('../src/clients/ServerClient');

describe('ServerService', () => {
  let serverService: ServerService;
  let serverClient: jest.Mocked<ServerClient>;

  const servers: Server[] = [
    { url: "https://does-not-work.perfume.new", priority: 1 },
    { url: "https://gitlab.com", priority: 4 },
    { url: "http://app.scnt.me", priority: 3 },
    { url: "https://offline.scentronix.com", priority: 2 },
  ];

  beforeEach(() => {
    serverClient = new ServerClient() as jest.Mocked<ServerClient>;
    serverService = new ServerService(serverClient);
  });

  it('should return the online server with the lowest priority', async () => {
    serverClient.isServerOnline.mockImplementation((server) => {
      if (server.url === 'https://gitlab.com' || server.url === 'http://app.scnt.me') {
        return Promise.resolve(true);
      }
      return Promise.resolve(false);
    });

    const result = await serverService.findLowestPriorityServer(servers);
    expect(result).toEqual({ url: "http://app.scnt.me", priority: 3 });
  });

  it('should throw an error if no servers are online', async () => {
    serverClient.isServerOnline.mockResolvedValue(false);
    await expect(serverService.findLowestPriorityServer(servers)).rejects.toThrow("No servers are online");
  });
});
