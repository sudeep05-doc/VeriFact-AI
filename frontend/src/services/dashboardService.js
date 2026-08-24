const activity = [
  { date: "Aug 18", verifications: 3, confidence: 84 },
  { date: "Aug 19", verifications: 5, confidence: 87 },
  { date: "Aug 20", verifications: 2, confidence: 82 },
  { date: "Aug 21", verifications: 6, confidence: 90 },
  { date: "Aug 22", verifications: 4, confidence: 88 },
  { date: "Aug 23", verifications: 7, confidence: 91 },
  { date: "Aug 24", verifications: 5, confidence: 89 },
];

const recentActivity = [
  { id: "verification-104", inputType: "YouTube URL", verdict: "Likely Fake", confidence: 91, date: "Aug 24, 2026" },
  { id: "verification-103", inputType: "Article URL", verdict: "Likely Real", confidence: 88, date: "Aug 23, 2026" },
  { id: "verification-102", inputType: "Text", verdict: "Needs review", confidence: 72, date: "Aug 22, 2026" },
  { id: "verification-101", inputType: "Image", verdict: "Likely Fake", confidence: 86, date: "Aug 21, 2026" },
];

const delay = (duration = 250) => new Promise((resolve) => window.setTimeout(resolve, duration));

// Replace this boundary with the dashboard API when it becomes available.
export async function getDashboardSummary() {
  await delay();
  return {
    stats: [
      { label: "Total verifications", value: 24, detail: "All submitted content" },
      { label: "Potential misinformation", value: 9, detail: "Flagged for review" },
      { label: "Likely credible", value: 12, detail: "Credibility signals found" },
      { label: "Average confidence", value: "86%", detail: "Across completed checks" },
    ],
    activity,
    recentActivity,
  };
}
