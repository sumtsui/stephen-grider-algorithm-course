// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let p1, p2
  p1 = p2 = list.getFirst()

  let step = 0
  while (step < n) {
    p2 = p2.next
    step++
  }

  while (p2.next) {
    p1 = p1.next
    p2 = p2.next
  }

  return p1
}

module.exports = fromLast;
