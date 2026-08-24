import { Eraser, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

function TextInput({ value, onChange, error, onVerify, disabled }) {
  return (
    <div>
      <label htmlFor="verification-text" className="text-sm font-medium">Content to verify</label>
      <textarea
        id="verification-text"
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Paste a claim, headline, article excerpt, or statement here..."
        className="mt-2 min-h-64 w-full resize-y rounded-xl border border-input bg-background p-4 text-base leading-7 outline-none transition placeholder:text-muted-foreground focus:border-foreground focus:ring-3 focus:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-60"
      />
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{value.length.toLocaleString()} characters</p>
          {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
        </div>
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={() => onChange("")} disabled={disabled || !value}>
            <Eraser /> Clear
          </Button>
          <Button type="button" onClick={onVerify} disabled={disabled}>
            <Send /> Verify
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TextInput;
