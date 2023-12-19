import { verifyAuth } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('user-token')?.value;

    const verifiedToken = token &&
        (await verifyAuth(token).catch((err) => console.log(err)));

    if (req.nextUrl.pathname === '/' && verifiedToken) {
        return NextResponse.redirect(new URL('/todos', req.url));
    }

    if (req.nextUrl.pathname === '/' && !verifiedToken) {
        return
    }

    if (!verifiedToken) {
        return NextResponse.redirect(new URL('/', req.url));
    }
}

export const config = {
    matcher: ['/', '/todos',]
}