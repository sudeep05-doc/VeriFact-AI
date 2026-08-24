// Frontend-only mock authentication. This is not production security and must
// be replaced by backend authentication before any real user data is handled.
const SESSION_KEY = "verifact_auth_session";

export const AUTH_ROLES = {
  GUEST: "GUEST",
  REGISTERED_USER: "REGISTERED_USER",
  ADMIN: "ADMIN",
};

const mockAccounts = [
  { user: { id: "mock-user-1", name: "Demo User", email: "user@verifact.ai", role: AUTH_ROLES.REGISTERED_USER }, password: "User@123" },
  { user: { id: "mock-admin-1", name: "Demo Admin", email: "admin@verifact.ai", role: AUTH_ROLES.ADMIN }, password: "Admin@123" },
];

const delay = (duration = 650) => new Promise((resolve) => window.setTimeout(resolve, duration));

function saveSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export async function login({ email, password }) {
  await delay();
  const account = mockAccounts.find((item) => item.user.email.toLowerCase() === email.trim().toLowerCase() && item.password === password);
  if (!account) throw new Error("Incorrect email or password.");
  saveSession(account.user);
  return account.user;
}

export async function register({ name, email }) {
  await delay();
  const user = { id: `mock-user-${Date.now()}`, name: name.trim(), email: email.trim().toLowerCase(), role: AUTH_ROLES.REGISTERED_USER };
  // Passwords are deliberately not stored in localStorage or retained by this mock service.
  saveSession(user);
  return user;
}

export async function logout() {
  await delay(250);
  localStorage.removeItem(SESSION_KEY);
}

export async function getCurrentUser() {
  return restoreSession();
}

export async function restoreSession() {
  await delay(150);
  try {
    const session = JSON.parse(localStorage.getItem(SESSION_KEY));
    return session?.id && session?.name && session?.email && Object.values(AUTH_ROLES).includes(session.role) ? session : null;
  } catch {
    localStorage.removeItem(SESSION_KEY);
    return null;
  }
}
