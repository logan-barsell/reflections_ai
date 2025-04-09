// Capitalize the first letter of a string and lowercase the rest
export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
