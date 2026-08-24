import { createContext, useEffect, useMemo, useState } from "react";
import * as authService from "@/services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    authService.restoreSession()
      .then((session) => { if (active) setUser(session); })
      .catch(() => { if (active) setError("Unable to restore your session."); })
      .finally(() => { if (active) setIsLoading(false); });
    return () => { active = false; };
  }, []);

  const runAuthAction = async (action) => {
    setError("");
    setIsLoading(true);
    try {
      const authenticatedUser = await action();
      setUser(authenticatedUser);
      return authenticatedUser;
    } catch (actionError) {
      const message = actionError instanceof Error ? actionError.message : "Authentication was unsuccessful. Please try again.";
      setError(message);
      throw actionError;
    } finally {
      setIsLoading(false);
    }
  };

  const value = useMemo(() => ({
    user,
    isAuthenticated: Boolean(user),
    isLoading,
    error,
    login: (credentials) => runAuthAction(() => authService.login(credentials)),
    register: (details) => runAuthAction(() => authService.register(details)),
    logout: async () => { setError(""); setIsLoading(true); try { await authService.logout(); setUser(null); } finally { setIsLoading(false); } },
    clearError: () => setError(""),
  }), [error, isLoading, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext };
