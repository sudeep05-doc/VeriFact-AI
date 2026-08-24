const history = [
  { id: "verification-104", inputType: "YouTube URL", title: "Video claim about an upcoming policy change", verdict: "Likely Fake", confidence: 91, date: "2026-08-24T10:30:00.000Z" },
  { id: "verification-103", inputType: "Article URL", title: "Local news report on renewable energy funding", verdict: "Likely Real", confidence: 88, date: "2026-08-23T08:15:00.000Z" },
  { id: "verification-102", inputType: "Text", title: "Claim about a new medical breakthrough", verdict: "Needs review", confidence: 72, date: "2026-08-22T13:40:00.000Z" },
  { id: "verification-101", inputType: "Image", title: "Image shared with a disaster-related caption", verdict: "Likely Fake", confidence: 86, date: "2026-08-21T17:20:00.000Z" },
  { id: "verification-100", inputType: "PDF", title: "Public report on regional economic indicators", verdict: "Likely Real", confidence: 84, date: "2026-08-19T09:00:00.000Z" },
];

const delay = (duration = 300) => new Promise((resolve) => window.setTimeout(resolve, duration));

// Replace this boundary with authenticated history endpoints when available.
export async function getVerificationHistory() {
  await delay();
  return history;
}
