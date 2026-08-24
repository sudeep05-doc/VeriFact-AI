function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Submit information",
      description:
        "Provide a news claim, article, image, or other media that you want VeriFact AI to analyse.",
    },
    {
      number: "02",
      title: "Multimodal analysis",
      description:
        "The system processes textual, visual, and other available evidence using specialised open-source foundation models.",
    },
    {
      number: "03",
      title: "Evidence reasoning",
      description:
        "Multiple evidence signals are combined to assess consistency, credibility, and potential misinformation.",
    },
    {
      number: "04",
      title: "Explainable decision",
      description:
        "VeriFact AI produces an understandable assessment together with the reasoning behind the result.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border/60 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            How VeriFact AI works
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
            From a claim to an
            <span className="text-muted-foreground"> explainable verdict.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            VeriFact AI combines multimodal evidence analysis, foundation
            models, and explainable reasoning to help users understand whether
            information deserves further verification.
          </p>
        </div>
      </section>

      {/* Pipeline */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Verification pipeline
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A structured verification process
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-border/60 bg-card p-7"
              >
                <span className="text-sm font-medium text-muted-foreground">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Model layer */}
      <section className="border-y border-border/60 bg-muted/20 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Multimodal intelligence
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Different media, one verification pipeline.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
            The architecture is designed to handle different forms of
            information while keeping the final assessment understandable to the
            user.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Text", "Semantic analysis"],
              ["Images", "Visual understanding"],
              ["Audio", "Speech analysis"],
              ["Evidence", "Cross-modal reasoning"],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-border/60 bg-card p-6"
              >
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explanation */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-border/60 bg-card p-8 sm:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Explainability
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            The result should explain itself.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
            Instead of presenting a simple true-or-false label, VeriFact AI is
            designed to expose the evidence and reasoning that contribute to the
            final assessment.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 px-6 py-8">
        <div className="mx-auto max-w-5xl text-sm text-muted-foreground">
          © 2026 VeriFact AI
        </div>
      </footer>
    </main>
  );
}

export default HowItWorks;
