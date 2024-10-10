import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <h1>Hello World!</h1>
      <Link href="users" className="btn btn-primary px-5 mb-3">
        Users
      </Link>

      <ProductCard />
    </main>
  );
}
