"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  // console.log(process.env.GOOGLE_CLIENT_SECRET!);
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-sky-600 text-white font-bold py-5 space-x-3">
      <Link href="/" className="mx-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/product">Product</Link>
      {status === "authenticated" && <div>{session.user!.name}</div>}
      {status === "authenticated" && (
        <img
          src={session.user!.image}
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        />
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default NavBar;
