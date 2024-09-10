"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  // error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-md mx-auto p-6 bg-red-100 border border-red-300 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <svg
                className="w-12 h-12 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21zm-1.5 14a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm1.5-7a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 0 3 0v-4a1.5 1.5 0 0 0-1.5-1.5z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h1 className="text-2xl font-bold text-red-600">
                  Something went wrong
                </h1>
                <p className="mt-4 text-red-800">
                  Oops something went wrong. try to refresh this page or <br />
                  feel free to contact us if the problem presists
                </p>
                <Button onClick={() => reset()} className="mt-5">Try again</Button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
