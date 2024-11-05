import { ServerController } from './controllers/ServerControllers';
import { Server } from './models/Server';

const servers: Server[] = [
  { url: "https://does-not-work.perfume.new", priority: 1 },
  { url: "https://gitlab.com", priority: 4 },
  { url: "http://app.scnt.me", priority: 3 },
  { url: "https://offline.scentronix.com", priority: 2 },
];

async function main() {
  const controller = new ServerController();
  try {
    const server = await controller.getLowestPriorityServer(servers);
    console.log("Online server with lowest priority:", server);
  } catch (error) {
    console.error(error);
  }
}

main();
