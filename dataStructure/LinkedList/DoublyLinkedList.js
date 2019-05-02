class DoublyLinkedList {
  constructor() {
    this._front = null;
    this._back = null;
    this._size = 0;
  }

  // O(1)
  _addFront(data) {
    let newNode = new DoublyLinkedList._Node(data);
    if (this.isEmpty()) {
      this._front = this._back = newNode;
      ++this._size;
    } else {
      newNode.setNext(this._front);
      this._front.setPrev(newNode);
      this._front = newNode;
      ++this._size;
    }
  }

  // O(1)
  _addBack(data) {
    let newNode = new DoublyLinkedList._Node(data);
    if (this.isEmpty()) {
      this._front = this._back = newNode;
      ++this._size;
    } else {
      newNode.setPrev(this._back);
      this._back.setNext(newNode);
      this._back = newNode;
      ++this._size;
    }
  }

  // O(1)
  _getFront() {
    if (this.isEmpty()) {
      throw new Error("List is Empty");
    } else {
      return this._front.getData();
    }
  }

  // O(1)
  _getBack() {
    if (this.isEmpty()) {
      throw new Error("List is Empty");
    } else {
      return this._back.getData();
    }
  }

  // O(1)
  _removeFront() {
    if (this.isEmpty()) {
      throw new Error("List is Empty");
    } else if (this.size() === 1) {
      let data = this._front.getData();
      this._front = this._back = null;
      --this._size;
      return data;
    } else {
      let data = this._front.getData();
      let nextNode = this._front.getNext();
      this._front.setNext(null);
      nextNode.setPrev(null);
      this._front = nextNode;
      --this._size;
      return data;
    }
  }

  // O(1)
  _removeBack() {
    if (this.isEmpty()) {
      throw new Error("List is Empty");
    } else if (this.size() === 1) {
      let data = this._front.getData();
      this._front = this._back = null;
      --this._size;
      return data;
    } else {
      let data = this._back.getData();
      let prevNode = this._back.getPrev();
      this._back.setPrev(null);
      prevNode.setNext(null);
      this._back = newNode;
      --this._size;
      return data;
    }
  }

  // O(n)
  get(index) {
    if (index < 0 || index >= this.size()) {
      throw new Error("invalid index");
    } else if (index === 0) {
      return this._getFront();
    } else if (index === this.size() - 1) {
      return this._getBack();
    } else {
      let current = this._front;
      for (let i = 1; i <= index; ++i) {
        current = current.getNext();
      }
      return current.getData();
    }
  }

  // O(n)
  add(data, index) {
    if (index < 0 || index > this.size()) {
      throw new Error("Invalid index");
    } else if (index === 0) {
      this._addFront(data);
    } else if (index === this.size()) {
      this._addBack(data);
    } else {
      let current = this._front;
      for (let i = 0; i < index; ++i) {
        current = current.getNext();
      }
      let newNode = new DoublyLinkedList._Node(
        data,
        current.getNext(),
        current
      );
      current.getNext().setPrev(newNode);
      current.setNext(newNode);
      ++this._size;
    }
  }

  //O(n)
  remove(index) {
    if (index < 0 || index >= this.size()) {
      throw new Error("Invalid index");
    } else if (index === 0) {
      return this._removeFront();
    } else if (index === this.size() - 1) {
      return this._removeBack();
    } else {
      let current = this._front;
      for (let i = 0; i < index; ++i) {
        current = current.getNext();
      }
      let toBeRemovedNode = current.getNext();
      toBeRemovedNode.setPrev(null);
      current.setNext(toBeRemovedNode.getNext());
      toBeRemovedNode.setNext(null);
      current.getNext().setPrev(current);
      --this._size;
      return toBeRemovedNode.data;
    }
  }

  size() {
    return this._size;
  }
  isEmpty() {
    return this._size === 0;
  }
  print() {}
}

DoublyLinkedList._Node = class {
  constructor(data, next = null, prev = null) {
    this._data = data;
    this._next = next;
    this._prev = prev;
  }
  setNext(next) {
    this._next = next;
  }
  setData(data) {
    this._data = data;
  }
  setPrev(prev) {
    this._prev = prev;
  }
  getNext() {
    return this._next;
  }
  getData() {
    return this._data;
  }
  getPrev() {
    return this._prev;
  }
};

module.exports = DoublyLinkedList;

// main

// const list = new DoublyLinkedList();

// list.add(5, 0);
// list.add(6, 0);
// list.add(7, 0);
// list.add(8, 0);

// console.log("List size", list.size());
// console.log("remove first elment in list : ", list.remove(0));
// console.log("List size", list.size());
// console.log("remove first elment in list : ", list.remove(0));
// console.log("remove first elment in list : ", list.remove(0));
// console.log("remove first elment in list : ", list.remove(0));
// console.log("List size", list.size());

// list.add(1, list.size());
// list.add(2, list.size());
// list.add(3, list.size());
// list.add(4, list.size());

// console.log("List size", list.size());
// console.log("get first element : ", list.get(0));
// console.log("get element index 2: ", list.get(3));
// console.log("get last element : ", list.get(list.size() - 1));
