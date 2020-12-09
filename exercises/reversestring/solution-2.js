// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// apple, elppa

function reverse(str) {
  let reversed = '';
  for (const char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

module.exports = reverse;
