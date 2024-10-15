import Link from "next/link";
import React from "react";

const NavBar = () => {
  // console.log(process.env.GOOGLE_CLIENT_SECRET!);
  return (
    <div className="flex bg-sky-600 text-white font-bold py-5 space-x-3">
      <Link href="/" className="mx-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/product">Product</Link>
      <Link href="/api/auth/signin">Login</Link>
    </div>
  );
};

export default NavBar;
