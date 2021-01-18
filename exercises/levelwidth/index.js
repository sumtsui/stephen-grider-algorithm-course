const Node = require('./node');

// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const result = []
  const arr = [root, '-']
  let width = 0

  while (arr.length) {
    const node = arr.shift()

    if (node === '-') {
      if (arr.length > 0) arr.push('-')
      result.push(width)
      width = 0
    } else {
      arr.push(...node.children)
      width++
    }

  }

  return result
}

const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);

levelWidth(root)

module.exports = levelWidth;
