import { Check, LoaderCircle } from "lucide-react";

const steps = ["Validating Input", "Uploading Content", "Acquiring Content", "AI Processing", "Preparing Report"];

function ProcessingState({ currentStep }) {
  return (
    <div className="py-4">
      <div className="flex items-center gap-3"><LoaderCircle className="size-5 animate-spin" /><div><h2 className="font-semibold">Verifying your submission</h2><p className="mt-1 text-sm text-muted-foreground">This is a simulated verification workflow.</p></div></div>
      <ol className="mt-8 space-y-4">
        {steps.map((step, index) => {
          const complete = index < currentStep;
          const active = index === currentStep;
          return <li key={step} className={`flex items-center gap-3 text-sm ${active ? "font-medium" : "text-muted-foreground"}`}><span className={`flex size-6 items-center justify-center rounded-full border ${complete ? "border-foreground bg-foreground text-background" : active ? "border-foreground" : "border-border"}`}>{complete ? <Check className="size-3.5" /> : active ? <LoaderCircle className="size-3.5 animate-spin" /> : index + 1}</span>{step}</li>;
        })}
      </ol>
    </div>
  );
}

export default ProcessingState;
