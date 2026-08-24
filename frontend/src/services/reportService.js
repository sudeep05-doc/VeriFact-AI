// Backend report generation will be connected here once its API contract is available.
export async function downloadReport(reportId) {
  if (!reportId) throw new Error("A report identifier is required.");
  throw new Error("Report downloads are not available yet.");
}
