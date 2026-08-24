import type { APIRoute } from 'astro';
import { auth } from '../../../auth.ts';

export const ALL: APIRoute = async (context) => {
  return auth.handler(context.request);
};
