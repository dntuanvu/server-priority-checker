import axios from 'axios';
import { Server } from '../models/Server';

export class ServerClient {
  async isServerOnline(server: Server): Promise<boolean> {
    try {
      const response = await axios.get(server.url, { timeout: 5000 });
      return response.status >= 200 && response.status < 300;
    } catch {
      return false;
    }
  }
}
