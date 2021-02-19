import slugify from "slugify";

export const stringToSlug = (input: string) => {
  return slugify(input.toLowerCase());
};
