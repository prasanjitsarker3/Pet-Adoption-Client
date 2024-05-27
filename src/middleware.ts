import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authKey } from "./Components/Common/auth";
import { jwtDecode } from "jwt-decode";

const AuthRoutes = ["/login", "/register"];
// const commonPrivateRoutes = ["/petDetails/:page*"];
const commonPrivateRoutesPattern = /^\/petDetails\/.*$/;
const commonPrivateRoutes = ["/changepassword"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log("Pathname", pathname);
  const accessToken = cookies().get("token")?.value;
  console.log("Value", accessToken);

  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if (
    commonPrivateRoutesPattern.test(pathname) ||
    commonPrivateRoutes.includes(pathname)
  ) {
    return NextResponse.next();
  }

  let decodedData = null;
  if (accessToken) {
    decodedData = jwtDecode(accessToken) as any;
  }
  const role = decodedData?.role;
  console.log("Role", role) as any;

  if (role === "ADMIN" && pathname.startsWith("/dashboard/admin")) {
    return NextResponse.next();
  }
  if (role === "USER" && pathname.startsWith("/dashboard/user")) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/login",
    "/register",
    "/petDetails/:page*",
    "/changepassword",
    "/dashboard/:page*",
  ],
};
