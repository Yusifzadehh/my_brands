"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);

    // errorLoggingService.log(error);
  }, [error]);

  return (
    <div className="flex h-[50vh] flex-col items-center justify-center">
      <div className="w-full max-w-md text-center">
        <h2 className="text-error-main mb-4 text-2xl font-bold">
          Oops! Something went wrong
        </h2>

        <p className="mb-6 text-gray-700">
          We encountered an unexpected error. Please try again or contact
          support.
        </p>

        <div className="flex justify-center gap-3">
          <button onClick={() => reset()}>Try Again</button>

          <button onClick={() => router.push("/")}>Go to Home</button>
        </div>
      </div>
    </div>
  );
}
