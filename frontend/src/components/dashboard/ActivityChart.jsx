import { useId } from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

function ActivityChart({ activity }) {
  const id = useId();
  return <Card><CardContent className="p-5 sm:p-6"><div><h2 className="font-semibold">Verification activity</h2><p className="mt-1 text-sm text-muted-foreground">Completed checks and confidence over the last seven days.</p></div><div className="mt-6 h-72" aria-label="Verification activity chart"><ResponsiveContainer width="100%" height="100%"><LineChart data={activity} margin={{ top: 8, right: 8, bottom: 0, left: -20 }}><CartesianGrid strokeDasharray="3 3" stroke="var(--border)" /><XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} /><YAxis yAxisId="verifications" allowDecimals={false} tickLine={false} axisLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} /><YAxis yAxisId="confidence" orientation="right" domain={[0, 100]} tickFormatter={(value) => `${value}%`} tickLine={false} axisLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} /><Tooltip contentStyle={{ borderRadius: 12, borderColor: "var(--border)", background: "var(--card)", color: "var(--foreground)" }} /><Legend /><Line yAxisId="verifications" type="monotone" dataKey="verifications" name="Verifications" stroke={`url(#verifications-${id})`} strokeWidth={2.5} dot={false} /><Line yAxisId="confidence" type="monotone" dataKey="confidence" name="Confidence" stroke="var(--muted-foreground)" strokeWidth={2.5} dot={false} /><defs><linearGradient id={`verifications-${id}`} x1="0" x2="1"><stop stopColor="var(--foreground)" /><stop offset="1" stopColor="var(--muted-foreground)" /></linearGradient></defs></LineChart></ResponsiveContainer></div></CardContent></Card>;
}

export default ActivityChart;
