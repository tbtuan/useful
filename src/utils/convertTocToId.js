export const tocId = (input) => {
  return input
    .replace(/[\s+]/g, "-")
    .replace("/", "")
    .replace(".", "")
    .toLowerCase();
};