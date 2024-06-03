import {NextResponse} from 'next/server';

export function middleware(request){
  // return NextResponse.redirect();
  return NextResponse.next();//forwards incoming
}

export const config = {
  matcher: '/news'
}