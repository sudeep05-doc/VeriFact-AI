import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { validateEmail, validatePassword } from "@/utils/authValidators";

function Login() {
  const { login, isLoading, error, clearError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const update = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => ({ ...current, [field]: "" }));
    clearError();
  };
  const submit = async (event) => {
    event.preventDefault();
    const errors = {
      email: validateEmail(form.email),
      password: validatePassword(form.password),
    };
    setFieldErrors(errors);
    if (Object.values(errors).some(Boolean)) return;
    try {
      await login(form);
      navigate(location.state?.from?.pathname || "/dashboard");
    } catch {
      /* Error is exposed by AuthContext. */
    }
  };
  return (
    <main className="min-h-screen bg-background px-6 py-12 text-foreground sm:py-20">
      <section className="mx-auto w-full max-w-md">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          VERIFACT AI
        </p>
        <h1 className="mt-5 text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="mt-3 text-muted-foreground">
          Sign in to access your VeriFact AI profile.
        </p>
        <form
          className="mt-8 space-y-5 rounded-2xl border border-border bg-card p-5 sm:p-7"
          onSubmit={submit}
          noValidate
        >
          <div>
            <label htmlFor="login-email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) => update("email", event.target.value)}
              className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 outline-none focus:border-foreground focus:ring-3 focus:ring-ring/30"
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={
                fieldErrors.email ? "login-email-error" : undefined
              }
            />
            {fieldErrors.email && (
              <p
                id="login-email-error"
                className="mt-1 text-sm text-destructive"
              >
                {fieldErrors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="login-password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              value={form.password}
              onChange={(event) => update("password", event.target.value)}
              className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 outline-none focus:border-foreground focus:ring-3 focus:ring-ring/30"
              aria-invalid={Boolean(fieldErrors.password)}
              aria-describedby={
                fieldErrors.password ? "login-password-error" : undefined
              }
            />
            {fieldErrors.password && (
              <p
                id="login-password-error"
                className="mt-1 text-sm text-destructive"
              >
                {fieldErrors.password}
              </p>
            )}
          </div>
          {error && (
            <p
              className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive"
              role="alert"
            >
              {error}
            </p>
          )}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in…" : "Sign in"}
          </Button>
        </form>
        <p className="mt-5 text-sm text-muted-foreground">
          New to VeriFact AI?{" "}
          <Link
            to="/register"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Create an account
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Login;
