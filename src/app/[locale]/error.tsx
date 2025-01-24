'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Something went wrong</h2>
        <button
          className="btn btn-primary mt-4"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
} 