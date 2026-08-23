import type { APIRoute } from 'astro';
import { db } from '../../db/client';
import { sql } from 'drizzle-orm';

export const prerender = false;

export const GET: APIRoute = async () => {
	const headers = {
		'Content-Type': 'application/json',
		'Cache-Control': 'no-store',
	};

	try {
		await db.execute(sql`select 1`);

		return new Response(
			JSON.stringify({
				status: 'ok',
				database: 'ok',
			}),
			{
				status: 200,
				headers,
			}
		);
	} catch {
		return new Response(
			JSON.stringify({
				status: 'degraded',
				database: 'unavailable',
			}),
			{
				status: 503,
				headers,
			}
		);
	}
};