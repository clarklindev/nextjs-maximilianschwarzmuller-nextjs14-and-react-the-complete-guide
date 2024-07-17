import { NextResponse } from "next/server";

export function middleware(request) {
  // return NextResponse.redirect();
  return NextResponse.redirect(new URL("/foodies", request.url));
  return NextResponse.next(); //forwards incoming
}

export const config = {
  matcher: "/",
};
