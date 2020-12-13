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
    this.count = 0
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

  insertAt(data, index) {
    if (index === 0) {
      this.insertFirst(data)
      return
    }
    const node = this.getAt(index-1)
    if (node) {
      const oldNext = node.next
      node.next = new Node(data, oldNext)
    } else {
      const last = this.getLast()
      last.next = new Node(data)
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
    return this.getAt(this.size()-1)
  }

  insertLast(data) {
    if (!this.head) this.head = new Node(data)
    else this.getLast().next = new Node(data)
  }

  removeAt(index) {
    if (index < 0) return

    if (index === 0) {
      if (this.head) {
        this.head = this.head.next
      }
      return
    }

    const nodeBefore = this.getAt(index-1)

    if (!nodeBefore) return

    const nodeToBeRemoved = nodeBefore.next 
    
    if (nodeToBeRemoved) {
      nodeBefore.next = nodeToBeRemoved.next
    }
  }

  getAt(index) {
    if (index < 0) return
    if (index === 0) return this.head
    if (this.head === null) return this.head

    let count = 0
    let node = this.head
    while (count < index) {
      if (node.next) {
        node = node.next
        count++
      } else {
        return null
      }
    }
    return node
  }

  removeLast() {
    this.removeAt(this.size()-1)
  }

  clear() {
    this.head = null
  }

  next() {
    const node = this.getAt(this.count)
    this.count++
    return {
      value: node,
      done: !node
    }
  }

  forEach(cb) {
    let iterable = this.next()
    while (!iterable.done) {
      const node = iterable.value
      cb(node)
      iterable = this.next()
    }
  }
}

module.exports = { Node, LinkedList };
















