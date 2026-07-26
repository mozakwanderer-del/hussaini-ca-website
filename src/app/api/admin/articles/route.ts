import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const articleSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  excerpt: z.string().min(10),
  content: z.string().min(50),
  author: z.string(),
  category: z.string(),
  tags: z.array(z.string()).optional(),
  seoTitle: z.string().optional(),
  metaDesc: z.string().optional(),
  published: z.boolean().default(false),
  readTime: z.number(),
});

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const articles = await prisma.article.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const validatedData = articleSchema.parse(body);

    const article = await prisma.article.create({
      data: {
        ...validatedData,
        publishedAt: validatedData.published ? new Date() : null,
      },
    });

    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
