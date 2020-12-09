// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const arr = str.split(' ');
  /**
   * 🤓
   * use a new array to take the capped words
   * so no need to use old nasty for loop and assign
   * arr[i] to the capped word
   * OMG!!!!!
   */
  const result = [];

  for (let word of arr) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  return result.join(' ');
}

module.exports = capitalize;
