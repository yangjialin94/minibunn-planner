import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-neutral-800">404</h1>
        <h2 className="mb-6 text-2xl font-semibold text-neutral-600">
          Page Not Found
        </h2>
        <p className="mb-8 text-neutral-500">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link
          href="/"
          className="rounded-full bg-neutral-800 px-6 py-3 text-white transition-colors hover:bg-neutral-700"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
