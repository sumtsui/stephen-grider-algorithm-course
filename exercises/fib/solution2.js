// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const memoi = {};

function fib(n) {
  if (n > 1) {
    if (memoi[n]) return memoi[n];
    else {
      const result = fib(n - 1) + fib(n - 2);
      memoi[n] = result;
      return result;
    }
  }
  return n;
}

module.exports = fib;
