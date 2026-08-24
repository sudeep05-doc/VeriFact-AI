import { useEffect, useState } from "react";
import FileUpload from "@/components/verify/FileUpload";
import ProcessingState from "@/components/verify/ProcessingState";
import TextInput from "@/components/verify/TextInput";
import UrlInput from "@/components/verify/UrlInput";
import VerifyInputSelector from "@/components/verify/VerifyInputSelector";
import { verifyContent } from "@/services/verificationService";
import { validateFile, validateRequired, validateUrl, validateYouTubeUrl } from "@/utils/verificationValidators";

const fileTypes = ["image", "pdf", "audio", "video"];

function Verify() {
  const [type, setType] = useState("text");
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [verificationPayload, setVerificationPayload] = useState(null);

  const changeType = (nextType) => { setType(nextType); setError(""); };
  const submit = () => {
    let validationError = "";
    let payload;
    if (type === "text") { validationError = validateRequired(text); payload = { type, value: text.trim() }; }
    else if (fileTypes.includes(type)) { validationError = validateFile(file, type); payload = { type, file }; }
    else { validationError = type === "youtube-url" ? validateYouTubeUrl(url) : validateUrl(url); payload = { type, value: url.trim() }; }
    setError(validationError);
    if (!validationError) {
      setVerificationPayload(payload);
      setCurrentStep(0);
      setProcessing(true);
    }
  };

  useEffect(() => {
    if (!processing) return undefined;
    let active = true;
    const run = async () => {
      const stages = (async () => { for (let step = 0; step < 5; step += 1) { if (active) setCurrentStep(step); await new Promise((resolve) => window.setTimeout(resolve, 400)); } })();
      const [result] = await Promise.all([verifyContent(verificationPayload), stages]);
      if (active) {
        console.log("Mock verification result:", result);
        // Future navigation: navigate("/result", { state: { result } });
        setProcessing(false);
      }
    };
    run();
    return () => { active = false; };
  }, [processing, verificationPayload]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border/60 px-6 py-16 sm:py-22"><div className="mx-auto max-w-4xl"><p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">VERIFACT AI</p><h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Verify what you see.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Submit text, media, an article link, or a YouTube URL for a structured verification assessment.</p></div></section>
      <section className="px-6 py-10 sm:py-14"><div className="mx-auto max-w-4xl"><div className="rounded-2xl border border-border bg-card p-4 sm:p-6"><VerifyInputSelector selected={type} onSelect={changeType} disabled={processing} /><div className="mt-8 border-t border-border pt-7">{processing ? <ProcessingState currentStep={currentStep} /> : type === "text" ? <TextInput value={text} onChange={(value) => { setText(value); setError(""); }} error={error} onVerify={submit} /> : fileTypes.includes(type) ? <FileUpload type={type} file={file} onChange={setFile} error={error} onError={setError} onVerify={submit} /> : <UrlInput type={type} value={url} onChange={(value) => { setUrl(value); setError(""); }} error={error} onVerify={submit} />}</div></div></div></section>
    </main>
  );
}

export default Verify;
