function HistoryCard({ item }) {
  const verdictClass = item.verdict === "Likely Fake" ? "bg-destructive/10 text-destructive" : item.verdict === "Likely Real" ? "bg-muted text-foreground" : "bg-secondary text-secondary-foreground";
  return <article className="rounded-xl border border-border bg-card p-4"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.inputType}</p><h2 className="mt-2 font-medium">{item.title}</h2></div><span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${verdictClass}`}>{item.verdict}</span></div><div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-sm text-muted-foreground"><span>{item.confidence}% confidence</span><time dateTime={item.date}>{new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(item.date))}</time></div></article>;
}

export default HistoryCard;
