// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const arr = n.toString().split('');
  let minor;

  /**
   * 🤓
   * better to check sign with n when it is a Number
   * like this: if (n < 0) ...
   */
  if (arr[0] === '-') {
    minor = arr.splice(0, 1)[0];
  }

  const reversed = arr.reverse().join('');

  const result = minor ? minor + reversed : reversed;

  return +result;
}

module.exports = reverseInt;
