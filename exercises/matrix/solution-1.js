// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// array index, you need to figure it out
// why pushing won't work
// findIndex can return 0, it is falsy but it is valid
// don't use Array(n), the items in it can't evaluate to true with item === undefined

function matrix(n) {
  const result = [];
  const numbers = [];

  // make an arr of n sub arr with length of n
  for (let i = 0; i < n; i++) {
    const subArr = [];
    for (let j = 0; j < n; j++) {
      subArr[j] = undefined;
    }
    result.push(subArr);
  }

  // make an arr of number 1 to n
  for (let i = 1; i <= n * n; i++) {
    numbers.push(i);
  }

  let forward = true;
  let idx = 0;

  while (idx < n) {
    if (forward) {
      // start from left, find the first not-full array
      let hasFillAll = false;

      result.forEach((arr) => {
        if (arr.some((spot) => spot === undefined)) {
          if (!hasFillAll) {
            arr.forEach((spot, idx) => {
              if (spot === undefined) {
                arr[idx] = numbers.splice(0, 1)[0];
              }
            });
            hasFillAll = true;
          } else {
            let rightMostEmptySpotIndex;
            for (let i = n - 1; i >= 0; i--) {
              if (arr[i] === undefined) {
                rightMostEmptySpotIndex = i;
                break;
              }
            }
            if (rightMostEmptySpotIndex)
              arr[rightMostEmptySpotIndex] = numbers.splice(0, 1)[0];
          }
        }
      });

      // fill it all from the left
      // for the rest of arrays, fill the right most empty spot of each array
    } else {
      // start from right, find the first not-full array
      let hasFillAll = false;
      for (let i = n - 1; i >= 0; i--) {
        if (result[i].some((spot) => spot === undefined)) {
          if (!hasFillAll) {
            for (let j = n - 1; j >= 0; j--) {
              if (result[i][j] === undefined)
                result[i][j] = numbers.splice(0, 1)[0];
            }
            hasFillAll = true;
          } else {
            let leftMostEmptySpotIndex = result[i].findIndex(
              (spot) => spot === undefined
            );
            if (leftMostEmptySpotIndex !== -1)
              result[i][leftMostEmptySpotIndex] = numbers.splice(0, 1)[0];
          }
        }
      }
      // fill it all from the right
      // for the rest of arrays, fill the left most empty spot of each array
    }

    forward = !forward;

    if (numbers.length > 0) {
      // continue
      if (idx === n - 1) idx = 0;
      else idx++;
    } else {
      // end
      break;
    }
  }
  // console.log('result', result);
  return result;
}

module.exports = matrix;
