// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let p1, p2
  p1 = p2 = list.getFirst()

  while (p2.next && p2.next.next) {
    p2 = p2.next.next
    p1 = p1.next

    if (p1 === p2) {  // js can check if 2 var point to same obj in memory by simply ===
      return true
    }
  }

  return false
}

module.exports = circular;
