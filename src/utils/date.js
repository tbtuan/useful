export const dateToString = (modifiedTime) =>
  new Date(Date.parse(modifiedTime)).toLocaleDateString();
