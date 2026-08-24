import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

function Profile() {
  const { user, logout, isLoading } = useAuth();
  const navigate = useNavigate();
  const signOut = async () => { await logout(); navigate("/", { replace: true }); };
  return <main className="min-h-screen bg-background text-foreground"><section className="border-b border-border/60 px-6 py-16 sm:py-22"><div className="mx-auto max-w-4xl"><p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">VERIFACT AI</p><h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Your profile</h1><p className="mt-5 text-lg text-muted-foreground">Manage your VeriFact AI account details.</p></div></section><section className="px-6 py-10 sm:py-14"><div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 sm:p-8"><dl className="divide-y divide-border"><div className="py-4 first:pt-0"><dt className="text-sm text-muted-foreground">Name</dt><dd className="mt-1 font-medium">{user?.name}</dd></div><div className="py-4"><dt className="text-sm text-muted-foreground">Email</dt><dd className="mt-1 font-medium">{user?.email}</dd></div><div className="py-4"><dt className="text-sm text-muted-foreground">Role</dt><dd className="mt-1 font-medium">{user?.role}</dd></div></dl><Button variant="outline" className="mt-6" onClick={signOut} disabled={isLoading}><LogOut /> {isLoading ? "Signing out…" : "Log out"}</Button></div></section></main>;
}

export default Profile;
