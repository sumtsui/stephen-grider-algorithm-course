// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// arrow function???
// bounding context???

function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      console.log('cache', JSON.stringify(cache, null, 4), args[0].toString());
      console.log('args', cache[args[0].toString()]);
      return cache[args];
    }

    console.log('cache', JSON.stringify(cache, null, 4), args[0].toString());
    console.log('args', cache[args[0].toString()]);

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  if (n > 1) {
    const result = fib(n - 1) + fib(n - 2);
    return result;
  }
  return n;
}

module.exports = memoize(fib);
