import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-medium text-muted-foreground">Error 404</p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Page not found
        </h1>

        <p className="mt-4 text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
