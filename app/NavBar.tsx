import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-sky-600 text-white font-bold py-5 gap-5">
      <Link href="/" className="mx-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/product">Product</Link>
    </div>
  );
};

export default NavBar;
