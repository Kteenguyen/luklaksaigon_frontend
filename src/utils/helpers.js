/**
 * Strips HTML tags from a string (e.g. <span>, <i>, etc.)
 * Used to clean titles before assigning them to image alt and title attributes.
 * 
 * @param {string} htmlString - The HTML string to be stripped.
 * @returns {string} The cleaned plain-text string.
 */
export const stripHtml = (htmlString) => {
  if (!htmlString) return "";
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "").trim();
};
