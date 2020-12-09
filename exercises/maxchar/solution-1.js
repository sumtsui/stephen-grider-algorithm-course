// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// for counting and verifying numbers of characters in a string
// we can use the same techique

function maxChar(str) {
  const chars = {};
  let maxKey;

  for (let c of str) {
    chars[c] = chars[c] + 1 || 1;
  }

  for (let c in chars) {
    if (!maxKey) maxKey = c;
    else {
      if (chars[c] > chars[maxKey]) {
        maxKey = c;
      }
    }
  }

  return maxKey;
}

module.exports = maxChar;
