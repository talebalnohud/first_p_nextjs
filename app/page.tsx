"use strict";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="flex justify-center items-center flex-col">
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="users" className="btn btn-primary px-5 mb-3">
        Users
      </Link>

      <ProductCard />
    </main>
  );
}
