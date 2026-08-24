import { BarChart3, History, LayoutDashboard, LogOut, Settings, ShieldCheck, UserRound } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const navigation = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/verify", label: "Verify", icon: ShieldCheck },
  { to: "/history", label: "History", icon: History },
  { to: "/profile", label: "Profile", icon: UserRound },
  { to: "/settings", label: "Settings", icon: Settings },
];

function AppSidebar({ onNavigate }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const signOut = async () => {
    await logout();
    navigate("/", { replace: true });
  };

  return (
    <aside className="flex h-full w-72 flex-col border-r border-border bg-card p-4" aria-label="Application navigation">
      <NavLink to="/dashboard" onClick={onNavigate} className="flex items-center gap-3 rounded-xl px-3 py-3 text-lg font-semibold tracking-tight">
        <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">V</span>
        VeriFact AI
      </NavLink>
      <nav className="mt-8 space-y-1" aria-label="Main navigation">
        {navigation.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} onClick={onNavigate} className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>
            <Icon className="size-4" />{label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto rounded-xl border border-border bg-muted/30 p-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-medium text-foreground"><BarChart3 className="size-4" />Verification workspace</div>
        <p className="mt-1 text-xs leading-5">Review your activity and verify new content.</p>
      </div>
      <button type="button" onClick={signOut} className="mt-3 flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground">
        <LogOut className="size-4" />Log out
      </button>
    </aside>
  );
}

export default AppSidebar;
