export const dateToString = (modifiedTime: string) =>
  new Date(Date.parse(modifiedTime)).toLocaleDateString("en-Us", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export const dateDifference = (dateMs1: number, dateMs2: number) => {
  const dayInMs = 1000 * 60 * 60 * 24;

  const monthInMs = dayInMs * 30.436875;

  const yearInMs = monthInMs * 12;

  const diffDate = dateMs1 - dateMs2;

  if (diffDate < dayInMs) {
    return "Today";
  } else if (Math.round(diffDate / dayInMs) === 1) {
    return "Yesterday";
  } else if (diffDate < monthInMs) {
    return Math.round(diffDate / dayInMs) + " days ago";
  } else if (diffDate < yearInMs) {
    return Math.round(diffDate / monthInMs) + " months ago";
  } else {
    return Math.round(diffDate / yearInMs) + " years ago";
  }
};
