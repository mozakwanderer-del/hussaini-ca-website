import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const host = request.headers.get('host') || 'hussaini-co.com';
  const baseUrl = `https://${host}`;

  const robots = `# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Allow all bots
User-agent: *
Allow: /

# Disallow private sections
Disallow: /admin/
Disallow: /api/
Disallow: /.env

# Crawl delay
Crawl-delay: 1
`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
