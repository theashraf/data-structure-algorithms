class SinglyLinkedList {
  constructor() {
    this._front = null;
    this._size = 0;
  }

  // O(1)
  _addFront(data) {
    let newNode = new SinglyLinkedList._Node(data);
    if (this.isEmpty()) {
      this._front = newNode;
    } else {
      newNode.setNext(this._front);
      this._front = newNode;
    }
    ++this._size;
  }

  // O(1)
  _getFront() {
    if (this.isEmpty()) throw new Error("List is empty");
    else {
      return this._front.getData();
    }
  }

  // O(1)
  _removeFront() {
    if (this.isEmpty()) {
      throw new Error("invalid remove");
    } else if (this._size === 1) {
      let ret = this._front;
      this._front = null;
      --this._size;
      return ret;
    } else {
      let ret = this._front;
      this._front = this._front.getNext();
      --this._size;
      return ret;
    }
  }

  // O(n)
  get(index) {
    if (index < 0 || index >= this._size) {
      throw new Error("invalid index");
    } else if (index === 0) {
      return this._getFront();
    } else {
      let current = this._front;
      for (let i = 0; i < index; ++i) {
        current = current.getNext();
      }
      return current.getData();
    }
  }

  //O(n)
  remove(index) {
    if (index < 0 || index > this._size) {
      throw new Error("invalid remove operation");
    } else if (index === 0) {
      return this._removeFront();
    } else {
      let current = this._front;
      for (let i = 0; i < index - 1; ++i) {
        current = current.getNext();
      }
      let ret = current.getNext().getData();
      current.setNext(current.getNext().getNext());
      --this._size;
      return ret;
    }
  }

  // O(n)
  add(data, index) {
    if (index < 0 || index > this._size) {
      throw new Error("invalid add operation");
    } else if (index === 0) {
      this._addFront(data);
    } else {
      let current = this._front;
      for (let i = 0; i < index - 1; ++i) {
        current = current.getNext();
      }
      let newNode = new SinglyLinkedList._Node(data, current.getNext());
      current.setNext(newNode);
      ++this._size;
    }
  }
  size() {
    return this._size;
  }
  isEmpty() {
    return this._size === 0;
  }
  print() {
    let current = this._front;
    for (let i = 0; i < this._size; ++i) {
      console.log(current.getData());
      current = current.getNext();
    }
    console.log("********************************************");
  }
}

SinglyLinkedList._Node = class {
  constructor(data, next = null) {
    this._data = data;
    this._next = next;
  }
  setNext(next) {
    this._next = next;
  }
  setData(data) {
    this._data = data;
  }
  getNext() {
    return this._next;
  }
  getData() {
    return this._data;
  }
};

module.exports = SinglyLinkedList;

// main
// let linkedList = new SinglyLinkedList();

// linkedList.add(5, 0);
// linkedList.add(6, 1);
// linkedList.add(16, 1);
// linkedList.add(10, 3);
// linkedList.add(14, 4);

// linkedList.print();

// linkedList.remove(0);

// linkedList.print();

// linkedList.remove(linkedList.size() - 1);

// linkedList.print();

// linkedList.add(500, 2);

// linkedList.print();
