// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.dataPool = new Stack()
    this.outPool = new Stack()
  }

  add(item) {
    this.dataPool.push(item)
  }

  remove() {
    while(this.dataPool.peek()) {
      this.outPool.push(this.dataPool.pop())
    }

    return this.outPool.pop()
  }
  
  peek() {
    while(this.dataPool.peek()) {
      this.outPool.push(this.dataPool.pop())
    }

    return this.outPool.peek()
  }
}

const q = new Queue()

q.add(0)
q.add(1)
q.add(2)

console.log(q.dataPool)

module.exports = Queue;
