import { CirclePlay, Link, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

function UrlInput({ type, value, onChange, error, onVerify, disabled }) {
  const isYoutube = type === "youtube-url";
  const Icon = isYoutube ? CirclePlay : Link;
  const label = isYoutube ? "YouTube URL" : "News article URL";
  const placeholder = isYoutube ? "https://www.youtube.com/watch?v=..." : "https://example.com/news-story";
  return (
    <div>
      <label htmlFor="verification-url" className="text-sm font-medium">{label}</label>
      <div className="mt-2 flex rounded-xl border border-input bg-background transition focus-within:border-foreground focus-within:ring-3 focus-within:ring-ring/30">
        <span className="flex items-center pl-4 text-muted-foreground"><Icon className="size-5" /></span>
        <input id="verification-url" type="url" value={value} disabled={disabled} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="h-13 min-w-0 flex-1 bg-transparent px-3 outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed" />
      </div>
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{isYoutube ? "Submit a public YouTube link for verification." : "Submit a public article link. We won't retrieve article content at this stage."}</p>
      <div className="mt-5 flex justify-end"><Button type="button" onClick={onVerify} disabled={disabled}><Send /> Verify URL</Button></div>
    </div>
  );
}

export default UrlInput;
