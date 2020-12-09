// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

//   pyramid(5)
//       '    #    '
//       '   ###   '
//       '  #####  '
//       ' ####### '
//       '#########'

/**
 * 1, 1*1
 * 2, 2*3
 * 3, 3*5
 * 4, 4*7
 * 5, 5*9
 *
 */

function pyramid(n) {
  // total line num: n
  // row
  // col
  const mid = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let str = '';
    for (let col = 0; col < 2 * n - 1; col++) {
      if (col >= mid - row && col <= mid + row) str += '#';
      else str += ' ';
    }
    console.log(str);
  }
}

console.log(pyramid(5));

module.exports = pyramid;
