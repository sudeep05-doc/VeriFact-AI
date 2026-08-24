import { File, Trash2, Upload } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { validateFile } from "@/utils/verificationValidators";

const details = {
  image: { label: "Image", formats: "JPG, PNG, or WEBP", accept: ".jpg,.jpeg,.png,.webp" },
  pdf: { label: "PDF", formats: "PDF", accept: ".pdf" },
  audio: { label: "Audio", formats: "MP3 or WAV", accept: ".mp3,.wav" },
  video: { label: "Video", formats: "MP4 or MOV", accept: ".mp4,.mov" },
};

function FileUpload({ type, file, onChange, error, onError, onVerify, disabled }) {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const detail = details[type];
  const chooseFile = (candidate) => {
    const validationError = validateFile(candidate, type);
    onError(validationError);
    onChange(validationError ? null : candidate);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    if (!disabled) chooseFile(event.dataTransfer.files[0]);
  };

  return (
    <div>
      <input ref={inputRef} type="file" accept={detail.accept} className="sr-only" onChange={(event) => chooseFile(event.target.files[0])} />
      {!file ? (
        <div
          onDragOver={(event) => { event.preventDefault(); if (!disabled) setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={`flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed p-6 text-center transition ${dragging ? "border-foreground bg-muted" : "border-border bg-muted/30"}`}
        >
          <div className="flex size-11 items-center justify-center rounded-full bg-background"><Upload className="size-5" /></div>
          <p className="mt-4 font-medium">Drop your {detail.label.toLowerCase()} here</p>
          <p className="mt-1 text-sm text-muted-foreground">Supported formats: {detail.formats}</p>
          <Button type="button" variant="outline" className="mt-5" disabled={disabled} onClick={() => inputRef.current?.click()}>Browse files</Button>
        </div>
      ) : (
        <div className="flex min-h-40 flex-col justify-center rounded-xl border border-border bg-muted/20 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-4"><div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-background"><File className="size-5" /></div><div className="min-w-0"><p className="truncate font-medium">{file.name}</p><p className="mt-1 text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(file.size >= 1024 * 1024 ? 1 : 2)} {file.size >= 1024 * 1024 ? "MB" : "MB"}</p></div></div>
          <Button type="button" variant="ghost" className="mt-4 text-destructive hover:text-destructive sm:mt-0" disabled={disabled} onClick={() => { onChange(null); onError(""); }}><Trash2 /> Remove</Button>
        </div>
      )}
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
      <div className="mt-4 flex justify-end"><Button type="button" onClick={onVerify} disabled={disabled}><Upload /> Verify {detail.label}</Button></div>
    </div>
  );
}

export default FileUpload;
