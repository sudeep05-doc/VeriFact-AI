import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppSidebar from "./AppSidebar";

function MobileNavigation({ open, onClose }) {
  if (!open) return null;
  return <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu"><button type="button" aria-label="Close navigation menu" className="absolute inset-0 bg-foreground/20" onClick={onClose} /><div className="absolute inset-y-0 left-0"><Button variant="outline" size="icon" className="absolute right-3 top-3 z-10 bg-card" onClick={onClose} aria-label="Close navigation menu"><X /></Button><AppSidebar onNavigate={onClose} /></div></div>;
}

export default MobileNavigation;
