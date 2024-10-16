export { default } from "next-auth/middleware";

export const config = {
  // *: zero or more parameter
  // +: one or more parameter
  // ?: zero or one parameter
  matcher: ["/dashboard/:path*"],
};
