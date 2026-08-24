import { CirclePlay, FileText, Image, Link, Mic, Type, Video } from "lucide-react";

const options = [
  { id: "text", label: "Text", icon: Type },
  { id: "image", label: "Image", icon: Image },
  { id: "pdf", label: "PDF", icon: FileText },
  { id: "audio", label: "Audio", icon: Mic },
  { id: "video", label: "Video", icon: Video },
  { id: "article-url", label: "Article URL", icon: Link },
  { id: "youtube-url", label: "YouTube", icon: CirclePlay },
];

function VerifyInputSelector({ selected, onSelect, disabled }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7" role="tablist" aria-label="Verification input type">
      {options.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          role="tab"
          aria-selected={selected === id}
          disabled={disabled}
          onClick={() => onSelect(id)}
          className={`flex min-h-20 flex-col items-center justify-center gap-2 rounded-xl border px-3 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50 ${selected === id ? "border-foreground bg-foreground text-background" : "border-border bg-card hover:bg-muted"}`}
        >
          <Icon className="size-5" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

export default VerifyInputSelector;
