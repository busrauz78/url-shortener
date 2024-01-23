import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

interface Props {
	url: string;
}

export async function POST(request: Request) {
	const body = await request.json();
	const { url } = body;
	const matchedUrl = await prisma.url.findFirst({
		where: {
			url,
		},
	});
	if (matchedUrl) {
		return NextResponse.json(matchedUrl.shortUrl);
	}
	const createdShortUrl = await prisma.url.create({
		data: {
			url,
			shortUrl: url,
		},
	});

	return NextResponse.json(createdShortUrl.shortUrl);
}
