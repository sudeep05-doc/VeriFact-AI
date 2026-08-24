export function verifyContent(payload) {
  // Payload is deliberately modality-agnostic, ready for a backend integration.
  if (!payload?.type) {
    return Promise.reject(new Error("A verification payload type is required."));
  }

  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        status: "success",
        prediction: "Likely Fake",
        confidence: 91,
        summary: "This is a mock verification explanation.",
        reasoning: {
          summary: "The submitted claim requires additional evidence verification.",
        },
        processing: {
          time_ms: 1850,
        },
      });
    }, 1850);
  });
}
