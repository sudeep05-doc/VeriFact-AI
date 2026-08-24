const FILE_CONFIG = {
  image: { extensions: ["jpg", "jpeg", "png", "webp"], maxSize: 10 * 1024 * 1024 },
  pdf: { extensions: ["pdf"], maxSize: 15 * 1024 * 1024 },
  audio: { extensions: ["mp3", "wav"], maxSize: 25 * 1024 * 1024 },
  video: { extensions: ["mp4", "mov"], maxSize: 50 * 1024 * 1024 },
};

export function validateRequired(value, message = "Please provide content to verify.") {
  return value && String(value).trim() ? "" : message;
}

export function validateFile(file, type) {
  if (!file) return "Please choose a file to verify.";

  const config = FILE_CONFIG[type];
  const extension = file.name.split(".").pop()?.toLowerCase();

  if (!config.extensions.includes(extension)) {
    return `Choose a ${config.extensions.map((item) => item.toUpperCase()).join(", ")} file.`;
  }

  if (file.size > config.maxSize) {
    return `This file is too large. The maximum size is ${config.maxSize / 1024 / 1024} MB.`;
  }

  return "";
}

export function validateUrl(value) {
  const requiredError = validateRequired(value, "Please enter a URL to verify.");
  if (requiredError) return requiredError;

  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? "" : "Enter a valid web URL.";
  } catch {
    return "Enter a valid web URL.";
  }
}

export function validateYouTubeUrl(value) {
  const urlError = validateUrl(value);
  if (urlError) return urlError;

  const hostname = new URL(value).hostname.toLowerCase().replace(/^www\./, "");
  return hostname === "youtube.com" || hostname === "m.youtube.com" || hostname === "youtu.be"
    ? ""
    : "Enter a valid YouTube URL.";
}
