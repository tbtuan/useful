export const dateToString = (modifiedTime) =>
  new Date(Date.parse(modifiedTime)).toLocaleDateString("default", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
