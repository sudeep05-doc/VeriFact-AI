import { AlertTriangle, BadgeCheck, BarChart3, Percent } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const icons = [BarChart3, AlertTriangle, BadgeCheck, Percent];

function StatsGrid({ stats }) {
  return <section aria-label="Verification statistics" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map((stat, index) => { const Icon = icons[index]; return <Card key={stat.label}><CardContent className="p-5"><div className="flex items-start justify-between"><p className="text-sm text-muted-foreground">{stat.label}</p><Icon className="size-4 text-muted-foreground" /></div><p className="mt-4 text-3xl font-semibold tracking-tight">{stat.value}</p><p className="mt-2 text-xs text-muted-foreground">{stat.detail}</p></CardContent></Card>; })}</section>;
}

export default StatsGrid;
