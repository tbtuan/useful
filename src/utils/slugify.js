import slugify from "slugify";

export const stringToSlug = (input) => {
  return slugify(input.toLowerCase());
};
