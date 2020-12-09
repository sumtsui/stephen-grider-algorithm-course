// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data
    this.next = next || null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    if (this.head) {
      const appended = new Node(data)
      appended.next = this.head
      this.head = appended
    } else {
      this.head = new Node(data)
    }
  }

  size() {
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }

    return count
  }

  getFirst() {
    return this.head
  }

  removeFirst() {
    this.head = this.head.next
  }

  getLast() {
    let node = this.head
    while (node) {
      if (node.next) {
        node = node.next
      } else {
        break
      }
    }
    return node
  }

  insertLast(data) {
    this.getLast().next = new Node(data)
  }

  removeLast() {
      
  }
}

module.exports = { Node, LinkedList };
