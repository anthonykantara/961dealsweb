import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import { fallbackLng, languages } from "./lib/i18n/settings";

function getLocale(request: NextRequest): string {
  try {
    // Get accept-language from headers
    const acceptLanguage = request.headers.get("accept-language");
    
    // Parse accept-language header into array of language codes
    let browserLocales = acceptLanguage
      ? acceptLanguage.split(",")
          .map(lang => lang.split(";")[0].trim())
      : [];

    // If no browser locales, use fallback
    if (!browserLocales.length) {
      return fallbackLng;
    }

    try {
      // Attempt to match browser locales with supported languages
      return match(browserLocales, languages, fallbackLng);
    } catch {
      // If matching fails, return fallback
      return fallbackLng;
    }
  } catch (e) {
    // If anything goes wrong, return fallback
    return fallbackLng;
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip certain paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Check if pathname starts with a supported language
  const pathnameHasLang = languages.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  if (pathnameHasLang) {
    return NextResponse.next();
  }

  // If no language in pathname, redirect with locale
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - api (API routes)
     * - static files (files with extensions)
     */
    "/((?!_next|api|.*\\.).*)",
  ],
};