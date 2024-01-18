import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST || 'htt://localhost',
  port: process.env.DATABASE_PORT || 5432,
}));