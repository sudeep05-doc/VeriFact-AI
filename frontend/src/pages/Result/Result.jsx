import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2, Download, ThumbsDown, ThumbsUp } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const inputTypeLabels = {
  text: "Text",
  image: "Image",
  pdf: "PDF",
  audio: "Audio",
  video: "Video",
  "article-url": "Article URL",
  "youtube-url": "YouTube URL",
};

function isValidResult(result) {
  return Boolean(result && typeof result === "object" && result.status === "success");
}

function formatProcessingTime(timeMs) {
  const time = Number(timeMs);
  return Number.isFinite(time) && time >= 0 ? `${(time / 1000).toFixed(2)}s` : "Unavailable";
}

function ResultLoading() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border/60 px-6 py-16 sm:py-22"><div className="mx-auto max-w-4xl"><div className="h-4 w-24 animate-pulse rounded bg-muted" /><div className="mt-5 h-11 w-72 animate-pulse rounded bg-muted" /></div></section>
      <section className="px-6 py-10 sm:py-14"><div className="mx-auto max-w-4xl space-y-5"><div className="h-52 animate-pulse rounded-2xl border border-border bg-muted/30" /><div className="h-36 animate-pulse rounded-2xl border border-border bg-muted/30" /></div></section>
    </main>
  );
}

function ResultMessage({ title, description, actionLabel, onAction }) {
  return (
    <main className="flex min-h-screen items-center bg-background px-6 text-foreground">
      <section className="mx-auto w-full max-w-md rounded-2xl border border-border bg-card p-6 text-center sm:p-8">
        <CheckCircle2 className="mx-auto size-9 text-muted-foreground" />
        <h1 className="mt-5 text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
        <Button className="mt-6" onClick={onAction}><ArrowLeft /> {actionLabel}</Button>
      </section>
    </main>
  );
}

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState("");
  const [reportMessage, setReportMessage] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 0);
    return () => window.clearTimeout(timer);
  }, [location.key]);

  const result = location.state?.result;
  const hasValidResult = isValidResult(result);

  if (loading) return <ResultLoading />;
  if (result && !hasValidResult) return <ResultMessage title="Unable to load the verification result." description="Please return to verification and try again." actionLabel="Try Again" onAction={() => navigate("/verify")} />;
  if (!hasValidResult) return <ResultMessage title="No verification result available." description="Start a verification to view its assessment here." actionLabel="Start Verification" onAction={() => navigate("/verify")} />;

  const confidence = Math.min(100, Math.max(0, Number(result.confidence) || 0));
  const verdict = typeof result.prediction === "string" && result.prediction.trim() ? result.prediction : "Verification complete";
  const inputType = inputTypeLabels[location.state?.inputType] || "Unavailable";
  const details = [
    ["Input Type", inputType],
    ["Processing Time", formatProcessingTime(result.processing?.time_ms)],
    ["Status", "Completed"],
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border/60 px-6 py-16 sm:py-22"><div className="mx-auto max-w-4xl"><p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">VERIFACT AI</p><h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Verification Result</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Review the assessment generated for your submitted content.</p></div></section>
      <section className="px-6 py-10 sm:py-14"><div className="mx-auto max-w-4xl space-y-5">
        <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-medium text-muted-foreground">Assessment</p><h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{verdict}</h2></div><div className="w-full sm:max-w-56"><div className="flex items-center justify-between text-sm"><span className="font-medium">Confidence</span><span className="font-semibold">{confidence}%</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-muted" aria-label={`Confidence: ${confidence}%`} role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={confidence}><div className="h-full rounded-full bg-foreground transition-all duration-500" style={{ width: `${confidence}%` }} /></div></div></div>
        </article>
        <article className="rounded-2xl border border-border bg-card p-6 sm:p-8"><h2 className="text-lg font-semibold">AI Explanation</h2><p className="mt-3 leading-7 text-muted-foreground">{typeof result.summary === "string" && result.summary.trim() ? result.summary : "No explanation is available for this verification."}</p></article>
        <article className="rounded-2xl border border-border bg-card p-6 sm:p-8"><h2 className="text-lg font-semibold">Reasoning Summary</h2><p className="mt-3 leading-7 text-muted-foreground">{typeof result.reasoning?.summary === "string" && result.reasoning.summary.trim() ? result.reasoning.summary : "No reasoning summary is available for this verification."}</p></article>
        <article className="rounded-2xl border border-border bg-card p-6 sm:p-8"><h2 className="text-lg font-semibold">Verification Details</h2><dl className="mt-5 divide-y divide-border">{details.map(([label, value]) => <div key={label} className="flex flex-col gap-1 py-3 first:pt-0 sm:flex-row sm:justify-between"><dt className="text-sm text-muted-foreground">{label}</dt><dd className="text-sm font-medium">{value}</dd></div>)}</dl></article>
        <div className="flex flex-col gap-3 sm:flex-row"><Button onClick={() => navigate("/verify")}><ArrowLeft /> Verify Again</Button><Button variant="outline" onClick={() => setReportMessage("Report downloads will be available when report generation is connected.")}><Download /> Download Report</Button></div>
        {reportMessage && <p className="text-sm text-muted-foreground" role="status">{reportMessage}</p>}
        <section className="border-t border-border pt-8"><h2 className="text-lg font-semibold">Was this result helpful?</h2><div className="mt-4 flex flex-col gap-3 sm:flex-row"><Button variant={feedback === "helpful" ? "default" : "outline"} aria-pressed={feedback === "helpful"} onClick={() => setFeedback("helpful")}><ThumbsUp /> Helpful</Button><Button variant={feedback === "not-helpful" ? "default" : "outline"} aria-pressed={feedback === "not-helpful"} onClick={() => setFeedback("not-helpful")}><ThumbsDown /> Not helpful</Button></div>{feedback && <p className="mt-3 text-sm text-muted-foreground" role="status">Thanks for your feedback.</p>}</section>
      </div></section>
    </main>
  );
}

export default Result;
