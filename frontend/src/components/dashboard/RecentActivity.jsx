import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

function RecentActivity({ items }) {
  return <Card><CardContent className="p-5 sm:p-6"><div className="flex items-center justify-between gap-4"><div><h2 className="font-semibold">Recent activity</h2><p className="mt-1 text-sm text-muted-foreground">Your latest verification results.</p></div><Link to="/history" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">View all <ArrowRight className="size-4" /></Link></div><div className="mt-5 divide-y divide-border">{items.map((item) => <div key={item.id} className="flex flex-col gap-2 py-4 first:pt-0 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-medium">{item.inputType}</p><p className="mt-1 text-sm text-muted-foreground">{item.date}</p></div><div className="flex items-center gap-4 sm:text-right"><span className="text-sm text-muted-foreground">{item.confidence}% confidence</span><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${item.verdict === "Likely Fake" ? "bg-destructive/10 text-destructive" : item.verdict === "Likely Real" ? "bg-muted text-foreground" : "bg-secondary text-secondary-foreground"}`}>{item.verdict}</span></div></div>)}</div></CardContent></Card>;
}

export default RecentActivity;
