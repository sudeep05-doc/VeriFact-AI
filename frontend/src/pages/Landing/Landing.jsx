import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

function Landing() {
  const { isAuthenticated } = useAuth();
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="border-b border-border/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">
              V
            </div>

            <span className="text-lg font-semibold tracking-tight">
              VeriFact AI
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a
              href="#how-it-works"
              className="transition hover:text-foreground"
            >
              How it works
            </a>

            <a
              href="#capabilities"
              className="transition hover:text-foreground"
            >
              Capabilities
            </a>

            <a href="#about" className="transition hover:text-foreground">
              About
            </a>
          </nav>

          <Link to={isAuthenticated ? "/profile" : "/login"} className="rounded-lg border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted">
            {isAuthenticated ? "Profile" : "Sign in"}
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.12),transparent_45%)]" />

        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-28">
          {/* Hero content */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Explainable Multimodal AI
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Verify before
              <span className="block text-muted-foreground">you believe.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
              VeriFact AI analyzes news, claims, images and other media to help
              identify potentially misleading information — with explanations
              you can understand.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground shadow-sm transition hover:opacity-90">
                Verify a claim
              </button>

              <button className="rounded-xl border border-border px-6 py-3.5 font-medium transition hover:bg-muted">
                Explore how it works
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span>✓ Text analysis</span>
              <span>✓ Image analysis</span>
              <span>✓ Explainable results</span>
              <span>✓ Open-source models</span>
            </div>
          </div>

          {/* Verification preview */}
          <div className="mx-auto w-full max-w-lg">
            <div className="rounded-3xl border border-border bg-card p-5 shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Verification analysis</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Multimodal evidence assessment
                  </p>
                </div>

                <div className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  Demo
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-muted/30 p-4">
                <p className="text-sm leading-6 text-muted-foreground">
                  “Scientists confirm that this newly discovered technology can
                  completely eliminate misinformation.”
                </p>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Verification confidence
                  </span>

                  <span className="text-sm font-semibold">78%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[78%] rounded-full bg-primary" />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border p-3">
                  <p className="text-xs text-muted-foreground">Claim</p>
                  <p className="mt-1 text-sm font-medium">Needs review</p>
                </div>

                <div className="rounded-xl border border-border p-3">
                  <p className="text-xs text-muted-foreground">Evidence</p>
                  <p className="mt-1 text-sm font-medium">Insufficient</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-muted/40 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Why?
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  The claim contains a strong absolute statement but lacks
                  sufficient supporting evidence from reliable sources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability preview */}
      <section
        id="capabilities"
        className="border-t border-border/60 bg-muted/20"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Built for modern misinformation
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              One platform. Multiple signals.
            </h2>

            <p className="mt-4 text-muted-foreground">
              VeriFact AI is designed to combine different evidence sources
              instead of relying on a single prediction.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Text & Claims",
                description:
                  "Analyze written claims, articles and statements for potential misinformation.",
              },
              {
                title: "Visual Evidence",
                description:
                  "Evaluate images and visual context as part of multimodal verification.",
              },
              {
                title: "Explainable Results",
                description:
                  "Understand why the system reached a particular assessment instead of receiving a black-box label.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 VeriFact AI</p>

          <p>Explainable multimodal AI for information verification.</p>
        </div>
      </footer>
    </main>
  );
}

export default Landing;
