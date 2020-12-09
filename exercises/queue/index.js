// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.currentEnd = null
    this.currentFront = 0
    this.data = {}
  }
  add(item) {
    if (this.currentEnd === null) {
      this.currentEnd = 0
    } else {
      this.currentEnd++
    }
    this.data[this.currentEnd] = item
  }
  remove() {
    let i = this.currentFront
    let result
    while (i <= this.currentEnd) {
      if (this.data[i]) {
        result = this.data[i]
        this.currentFront++
        delete this.data[i]
        break
      }
      i++
    }

    return result
  }
}

module.exports = Queue;
