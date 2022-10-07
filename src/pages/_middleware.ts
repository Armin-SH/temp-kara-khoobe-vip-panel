import {NextRequest, NextResponse} from 'next/server'

export async function middleware(req: NextRequest) {
  const {pathname} = req.nextUrl;
  const token = req.cookies['token'];

  const authPattern = /^\/auth\/[a-z]*/g;
  const fontPattern = /^\/fonts\/[a-z]*/g;
  const iconsPattern = /^\/icons\/[a-z]*/g;
  const brandIconsPattern = /^\/brand-icons\/[a-z]*/g;
  const workboxPattern = /^\/workbox\-[a-z0-9]*.js/g;
  // if (!token && !authPattern.test(decodeURI(pathname)) && !brandIconsPattern.test(decodeURI(pathname)) && !iconsPattern.test(decodeURI(pathname)) && !fontPattern.test(decodeURI(pathname)) && !workboxPattern.test(decodeURI(pathname)) && decodeURI(pathname) !== '/sw.js' && decodeURI(pathname) !== '/manifest.json' && decodeURI(pathname) !== '/favicon.ico') {
  //   return NextResponse.redirect(new URL('/auth/login', req.url))
  // }

  return NextResponse.next();
}
