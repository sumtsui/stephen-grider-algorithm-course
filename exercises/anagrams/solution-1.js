// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  function makeCharMap(str) {
    const cleaned = str.replace(/[^\w]/, '').toLowerCase();
    const result = {};

    for (let char of cleaned) {
      result[char] = result[char] + 1 || 1;
    }

    return result;
  }

  const mapA = makeCharMap(stringA);
  const mapB = makeCharMap(stringB);

  if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;

  for (let key of Object.keys(mapA)) {
    if (mapA[key] !== mapB[key]) return false;
  }

  return true;
}

module.exports = anagrams;
