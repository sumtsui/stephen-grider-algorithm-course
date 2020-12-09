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
    const last = result[result.length - 1];

    /**
     * 🤓
     * use chunk length less than chunk size as condition!! OMG!!!
     */
    if (last && last.length < size) {
      last.push(array[i]);
    } else {
      result.push([array[i]]);
    }
    i++;
  }

  return result;
}

module.exports = chunk;
