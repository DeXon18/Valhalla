import { betterAuth } from 'better-auth';
import { drizzleAdapter } from '@better-auth/drizzle-adapter';
import { db } from './db/client.ts';
import * as schema from './db/schema.ts';

const secret = process.env.BETTER_AUTH_SECRET;
const baseURL = process.env.BETTER_AUTH_URL;

if (!secret) {
  throw new Error('BETTER_AUTH_SECRET environment variable is required');
}

if (!baseURL) {
  throw new Error('BETTER_AUTH_URL environment variable is required');
}

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema,
  }),
  secret,
  baseURL,
  emailAndPassword: {
    enabled: true,
    disableSignUp: true,
  },
});
