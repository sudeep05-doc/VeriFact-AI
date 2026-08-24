import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

function AppHeader({ onMenuOpen }) {
  const { user } = useAuth();
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-4 sm:px-6">
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuOpen} aria-label="Open navigation menu"><Menu /></Button>
      <div className="ml-auto flex items-center gap-3 text-right">
        <div><p className="text-sm font-medium">{user?.name || "User"}</p><p className="text-xs text-muted-foreground">{user?.email}</p></div>
        <span className="flex size-9 items-center justify-center rounded-full bg-muted text-sm font-semibold" aria-hidden="true">{user?.name?.charAt(0)?.toUpperCase() || "U"}</span>
      </div>
    </header>
  );
}

export default AppHeader;
