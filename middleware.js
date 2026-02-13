import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Redirect root to Swedish
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/sv', request.url))
  }

  // Redirect old paths without language prefix
  const oldPaths = ['/fragor', '/om', '/kontakt', '/kontakt/tack']
  for (const path of oldPaths) {
    if (pathname === path) {
      return NextResponse.redirect(new URL(`/sv${path}`, request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/fragor', '/om', '/kontakt', '/kontakt/tack'],
}
