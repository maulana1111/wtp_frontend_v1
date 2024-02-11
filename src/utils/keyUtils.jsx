export const removeUnderscoreAndCapitalize = (key) => {
  return key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};
