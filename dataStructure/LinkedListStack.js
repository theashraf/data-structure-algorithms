const LinkedList = require("./SinglyLinkedList");

class Stack {
  constructor() {
    this._linkedList = new LinkedList();
  }
  // O(1)
  push(data) {
    this._linkedList.add(data, 0);
  }
  // O(1)
  pop() {
    return this._linkedList.remove(0);
  }
  // O(1)
  getTop() {
    if (this.isEmpty()) {
      throw new Error("stack is empty");
    } else {
      return this._linkedList.get(0);
    }
  }
  size() {
    return this._linkedList.size();
  }
  isEmpty() {
    return this._linkedList.isEmpty();
  }
  print() {
    this._linkedList.print();
  }
}

// main
// const stack = new Stack();
// stack.push(5);
// stack.push(6);
// stack.pop();
// console.log(stack.getTop());
// stack.print();
