// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const result = [];
  let i = 0;

  while (i < array.length) {
    /**
     * 🤓
     * use slice!! OMG!!!
     */
    result.push(array.slice(i, i + size));
    /**
     * 🤓
     * incremented by chunk size!! OMG!!!
     */
    i += size;
  }

  return result;
}

module.exports = chunk;
