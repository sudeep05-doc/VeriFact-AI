function Landing() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Explainable Multimodal AI
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          VeriFact AI
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          An explainable multimodal fake news detection platform powered by
          open-source foundation models.
        </p>
      </div>
    </main>
  );
}

export default Landing;
