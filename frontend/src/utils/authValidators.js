export function validateName(value) {
  return value.trim().length >= 2 ? "" : "Enter your name using at least 2 characters.";
}

export function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : "Enter a valid email address.";
}

export function validatePassword(value) {
  return value.length >= 8 ? "" : "Use at least 8 characters for your password.";
}

export function validateConfirmPassword(password, confirmation) {
  return password === confirmation ? "" : "Passwords do not match.";
}
