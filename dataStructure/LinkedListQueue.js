const LinkedList = require("./SinglyLinkedList2"); // enhanced LinkedList with addBack in O(1)

class Queue {
  constructor() {
    this._linkedList = new LinkedList();
  }
  push(data) {
    this._linkedList.add(data, this._linkedList.size());
  }
  pop() {
    return this._linkedList.remove(0);
  }
  getFront() {
    return this._linkedList.get(0);
  }
  getBack() {
    return this._linkedList.get(this._linkedList.size() - 1);
  }
  isEmpty() {
    return this._linkedList.isEmpty();
  }
  size() {
    return this._linkedList.size();
  }
}

// main
// const queue = new Queue();

// queue.push(1);
// queue.push(2);
// queue.push(3);
// queue.push(4);

// console.log(queue.getFront());
// console.log(queue.getBack());

// console.log(queue.pop());

// console.log(queue.getFront());
