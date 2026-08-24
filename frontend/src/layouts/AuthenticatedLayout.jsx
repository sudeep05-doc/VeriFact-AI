import { useState } from "react";
import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from "@/components/layout/AppSidebar";
import MobileNavigation from "@/components/layout/MobileNavigation";

function AuthenticatedLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="min-h-screen bg-background text-foreground"><div className="hidden fixed inset-y-0 left-0 lg:block"><AppSidebar /></div><div className="lg:pl-72"><AppHeader onMenuOpen={() => setMenuOpen(true)} /><main className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">{children}</main></div><MobileNavigation open={menuOpen} onClose={() => setMenuOpen(false)} /></div>;
}

export default AuthenticatedLayout;
