const capabilities = [
  {
    number: "01",
    title: "Text analysis",
    description:
      "Analyze claims, headlines, articles, and written statements to identify potentially misleading or unsupported information.",
  },
  {
    number: "02",
    title: "Image analysis",
    description:
      "Examine visual content for signals that may indicate manipulation, misleading context, or inconsistencies.",
  },
  {
    number: "03",
    title: "Multimodal verification",
    description:
      "Combine textual and visual evidence to build a more complete understanding of a claim.",
  },
  {
    number: "04",
    title: "Explainable results",
    description:
      "Present verification results with understandable reasoning instead of returning an unexplained prediction.",
  },
  {
    number: "05",
    title: "Evidence assessment",
    description:
      "Evaluate available evidence and identify when a claim requires additional verification.",
  },
  {
    number: "06",
    title: "Open-source AI foundation",
    description:
      "Designed around open-source foundation models so the verification pipeline can remain transparent and extensible.",
  },
];

function Capabilities() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border/60 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            VERIFACT AI CAPABILITIES
          </p>

          <h1 className="max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            More than detection.
            <br />
            <span className="text-muted-foreground">
              Understand the evidence.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
            VeriFact AI is designed to analyze information across multiple
            modalities and explain why a claim may deserve trust, scrutiny, or
            further verification.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              WHAT THE PLATFORM CAN DO
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              A multimodal approach to information verification.
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The platform brings together several analysis capabilities to
              create a structured verification workflow.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article key={item.number} className="bg-background p-8 sm:p-10">
                <span className="text-sm font-medium text-muted-foreground">
                  {item.number}
                </span>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Verification philosophy */}
      <section className="border-y border-border/60 px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              BUILT FOR EXPLANATION
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              A result should tell you why.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-muted-foreground">
              VeriFact AI is not intended to simply label information as “true”
              or “false.” Its goal is to provide a structured assessment of the
              claim, available evidence, and confidence so that users can make
              better-informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            VERIFICATION STARTS WITH A CLAIM
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to verify what you see?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Explore how VeriFact AI turns claims and evidence into an
            understandable verification process.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Capabilities;
