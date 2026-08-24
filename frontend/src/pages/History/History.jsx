import { useEffect, useMemo, useState } from "react";
import HistoryFilters from "@/components/history/HistoryFilters";
import HistoryTable from "@/components/history/HistoryTable";
import { getVerificationHistory } from "@/services/historyService";

const defaultFilters = { search: "", verdict: "all", type: "all", sort: "newest" };

function History() {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);
  const [error, setError] = useState("");
  useEffect(() => { let active = true; getVerificationHistory().then((data) => active && setItems(data)).catch(() => active && setError("Unable to load verification history. Please try again.")).finally(() => active && null); return () => { active = false; }; }, []);
  const filteredItems = useMemo(() => items.filter((item) => `${item.title} ${item.inputType}`.toLowerCase().includes(filters.search.toLowerCase())).filter((item) => filters.verdict === "all" || item.verdict === filters.verdict).filter((item) => filters.type === "all" || item.inputType === filters.type).sort((first, second) => filters.sort === "confidence" ? second.confidence - first.confidence : filters.sort === "oldest" ? new Date(first.date) - new Date(second.date) : new Date(second.date) - new Date(first.date)), [filters, items]);
  return <div><div className="mb-7"><p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Verification records</p><h1 className="mt-3 text-3xl font-semibold tracking-tight">History</h1><p className="mt-2 text-muted-foreground">Search and review your previous verification assessments.</p></div><HistoryFilters filters={filters} onChange={(field, value) => setFilters((current) => ({ ...current, [field]: value }))} onReset={() => setFilters(defaultFilters)} />{error ? <p className="mt-5 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive" role="alert">{error}</p> : !items.length ? <div className="mt-5 h-44 animate-pulse rounded-xl bg-muted" /> : <div className="mt-5"><p className="mb-3 text-sm text-muted-foreground">{filteredItems.length} {filteredItems.length === 1 ? "result" : "results"}</p><HistoryTable items={filteredItems} /></div>}</div>;
}

export default History;
