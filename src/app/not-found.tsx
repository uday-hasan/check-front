"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link href="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
    </div>
  );
}
