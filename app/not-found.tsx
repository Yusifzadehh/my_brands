import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-[50vh] flex-col items-center justify-center gap-4">
      <h1 className="text-center text-4xl">404 NOT FOUND</h1>

      <Link href={"/"}>Back to HOME page</Link>
    </main>
  );
}
