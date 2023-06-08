import slugify from "slugify";

export const createSlug = (str: string) => slugify(str, { lower: true });
