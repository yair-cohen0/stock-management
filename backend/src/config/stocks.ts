import * as process from 'node:process';
import { registerAs } from '@nestjs/config';

export default registerAs('stocks', () => ({
  apiKey: process.env.API_KEY || 'api_key',
}));
