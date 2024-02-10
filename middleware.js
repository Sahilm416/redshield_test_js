import { NextRequest, NextResponse } from "next/server";
import { getSession } from "redshield/actions/auth";
  
export async function middleware(request) {
    const url = request.nextUrl.clone();
    const session = await getSession();
    //if already authenticated then redirect back to desired page
    if (url.pathname === "/Auth") {
      if (session.status) {
      //add path where logged in user should be redirected
        return NextResponse.redirect(new URL("/", request.url));
      } else {
        return NextResponse.next();
      }
    }
   //this redirects the users to auth page if not authenticated
    if (session.status) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/Auth", request.url));
    }
}
export const config = {
    //add routes in matcher array to protect them from unauthenticated users
    matcher: ["/", "/Auth" ],
};