const DoublyLinkedList = require("../LinkedList/DoublyLinkedList");

class DequeLinkedList {
  constructor() {
    this._linkedList = new DoublyLinkedList();
  }
  addFirst(data) {
    this._linkedList.add(data, 0);
  }
  addLast(data) {
    this._linkedList.add(data, this._linkedList.size());
  }
  removeFirst() {
    return this._linkedList.remove(0);
  }
  removeLast() {
    return this._linkedList.remove(this._linkedList.size() - 1);
  }
  first() {
    return this._linkedList.get(0);
  }
  last() {
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
const q = new DequeLinkedList();

q.addFirst(3);
q.addFirst(7);
q.addFirst(11);
q.addLast(5);

console.log(q.first());
console.log(q.size());
// console.log(q.first());
console.log(q.last());
console.log(q.removeLast());
// console.log(q.first());
console.log(q.last());
console.log(q.removeFirst());
console.log(q.first());
