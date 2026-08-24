import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

function GuestRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <main className="flex min-h-screen items-center justify-center bg-background text-sm text-muted-foreground">Restoring your session…</main>;
  return isAuthenticated ? <Navigate to="/profile" replace /> : children;
}

export default GuestRoute;
