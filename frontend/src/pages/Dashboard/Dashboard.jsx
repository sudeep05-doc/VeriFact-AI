import { useEffect, useState } from "react";
import ActivityChart from "@/components/dashboard/ActivityChart";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import StatsGrid from "@/components/dashboard/StatsGrid";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import { getDashboardSummary } from "@/services/dashboardService";

const Dashboard = () => {
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => { let active = true; getDashboardSummary().then((data) => active && setSummary(data)).catch(() => active && setError("Unable to load dashboard data. Please try again.")).finally(() => active && null); return () => { active = false; }; }, []);
  if (error) return <section className="rounded-xl border border-destructive/30 bg-destructive/10 p-5 text-sm text-destructive" role="alert">{error}</section>;
  if (!summary) return <div className="space-y-6" aria-label="Loading dashboard"><div className="h-44 animate-pulse rounded-xl bg-muted" /><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{Array.from({ length: 4 }, (_, index) => <div key={index} className="h-36 animate-pulse rounded-xl bg-muted" />)}</div><div className="h-80 animate-pulse rounded-xl bg-muted" /></div>;
  return <div className="space-y-6"><WelcomeCard /><StatsGrid stats={summary.stats} /><div className="grid gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(20rem,1fr)]"><ActivityChart activity={summary.activity} /><RecentActivity items={summary.recentActivity} /></div><QuickActions /></div>;
};

export default Dashboard;
