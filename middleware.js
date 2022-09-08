import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req, res, next) {
  // token will exists if the user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;

  // allow the req if the following conditions are true
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }
  // redirect if there is not a token
  // and they are requesting a protected route
  /*if (!token && pathname !== "/login") {
    return NextResponse.redirect("http://localhost:3000/login");
  }*/
}