export const toSnakeCase = (str: string) =>
  str.toLowerCase().split(" ").join("-");
