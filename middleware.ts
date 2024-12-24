import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { languages } from '@/lib/languages'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Check if the pathname starts with a language code
  const pathnameHasLang = Object.keys(languages).some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  )

  if (!pathnameHasLang) {
    // Redirect to default language (English)
    return NextResponse.redirect(
      new URL(`/en${pathname}`, request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // Skip all API routes
    '/((?!_next|api|.*\\.).*)'],
}