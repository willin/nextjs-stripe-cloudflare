import type { NextRequest } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { env, cf, ctx } = getRequestContext();
  console.log(request.url);
  return Response.json({});
}
