import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { validateConfirmPassword, validateEmail, validateName, validatePassword } from "@/utils/authValidators";

function Register() {
  const { register, isLoading, error, clearError } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmation: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const update = (field, value) => { setForm((current) => ({ ...current, [field]: value })); setFieldErrors((current) => ({ ...current, [field]: "" })); clearError(); };
  const submit = async (event) => {
    event.preventDefault();
    const errors = { name: validateName(form.name), email: validateEmail(form.email), password: validatePassword(form.password), confirmation: validateConfirmPassword(form.password, form.confirmation) };
    setFieldErrors(errors);
    if (Object.values(errors).some(Boolean)) return;
    try { await register(form); navigate("/dashboard", { replace: true }); } catch { /* Error is exposed by AuthContext. */ }
  };
  const field = (id, label, type, autoComplete) => <div><label htmlFor={id} className="text-sm font-medium">{label}</label><input id={id} type={type} autoComplete={autoComplete} value={form[id]} onChange={(event) => update(id, event.target.value)} className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 outline-none focus:border-foreground focus:ring-3 focus:ring-ring/30" aria-invalid={Boolean(fieldErrors[id])} aria-describedby={fieldErrors[id] ? `${id}-error` : undefined} />{fieldErrors[id] && <p id={`${id}-error`} className="mt-1 text-sm text-destructive">{fieldErrors[id]}</p>}</div>;
  return <main className="min-h-screen bg-background px-6 py-12 text-foreground sm:py-20"><section className="mx-auto w-full max-w-md"><p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">VERIFACT AI</p><h1 className="mt-5 text-3xl font-bold tracking-tight">Create your account</h1><p className="mt-3 text-muted-foreground">Save your verification experience and access your profile.</p><form className="mt-8 space-y-5 rounded-2xl border border-border bg-card p-5 sm:p-7" onSubmit={submit} noValidate>{field("name", "Name", "text", "name")}{field("email", "Email", "email", "email")}{field("password", "Password", "password", "new-password")}{field("confirmation", "Confirm password", "password", "new-password")}{error && <p className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive" role="alert">{error}</p>}<Button type="submit" className="w-full" disabled={isLoading}>{isLoading ? "Creating account…" : "Create account"}</Button></form><p className="mt-5 text-sm text-muted-foreground">Already have an account? <Link to="/login" className="font-medium text-foreground underline-offset-4 hover:underline">Sign in</Link></p></section></main>;
}

export default Register;
