class LinkedList {
  constructor() {
    this._size = 0;
    this._front = null;
    this._back = null;
  }
  // O(1)
  _addFront(data) {
    let newNode = new LinkedList._Node(data);
    if (this.isEmpty()) {
      this._front = newNode;
      this._back = newNode;
    } else {
      newNode.setNext(this._front.getNext());
      this._front = newNode;
    }
    ++this._size;
  }
  // O(1)
  _addBack(data) {
    let newNode = new LinkedList._Node(data);
    if (this.isEmpty()) {
      this._front = newNode;
      this._back = newNode;
    } else {
      this._back.setNext(newNode);
      this._back = newNode;
    }
    ++this._size;
  }
  // O(n)
  _getFront() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    } else {
      return this._front.getData();
    }
  }
  // O(1)
  _getBack() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    } else {
      return this._back.getData();
    }
  }
  // O(1)
  _removeFront() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    } else {
      let ret = this._front.getData();
      this._front = this._front.getNext();
      --this._size;
      return ret;
    }
  }
  //O(n)
  _removeBack() {
    let current = this._front;
    let i = 0;
    while (i < this._size - 2) {
      current = current.getNext();
      ++i;
    }
    const ret = current.getNext().getData();
    current.setNext(current.getNext().getNext());
    this._back = current;
    --this._size;
    return ret;
  }
  // O(n)
  add(data, index) {
    if (index < 0 || index > this._size) {
      throw new Error("Invalid Index");
    } else if (this._size === 0) {
      this._addFront(data);
    } else if (index === this._size) {
      this._addBack(data);
    } else {
      let current = this._front;
      let i = 0;
      while (i < index - 1) {
        current = current.getNext();
        ++i;
      }
      let newNode = new LinkedList._Node(data, current.getNext());
      current.setNext(newNode);
      ++this._size;
    }
  }
  // O(n)
  get(index) {
    if (index < 0 || index > this._size - 1) {
      throw new Error("Invalid Index");
    } else if (this._size === 0) {
      return this._getFront();
    } else if (index === this._size - 1) {
      return this._getBack();
    } else {
      let current = this._front;
      let i = 0;
      while (i < index) {
        current = current.getNext();
        ++i;
      }
      return current.getData();
    }
  }
  // O(n)
  remove(index) {
    if (index < 0 || index > this._size) {
      throw new Error("Invalid Index");
    } else if (index === 0) {
      return this._removeFront();
    } else if (index === this._size - 1) {
      return this._removeBack();
    } else {
      let current = this._front;
      let i = 0;
      while (i < index - 1) {
        current = current.getNext();
        ++i;
      }
      const ret = current.getNext().getData();
      current.setNext(current.getNext().getNext());
      --this._size;
      return ret;
    }
  }

  isEmpty() {
    return this._size === 0;
  }
  size() {
    return this._size;
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

LinkedList._Node = class {
  constructor(data, next = null) {
    this._data = data;
    this._next = next;
  }

  setData(data) {
    this._data = data;
  }
  getData() {
    return this._data;
  }
  setNext(next) {
    this._next = next;
  }
  getNext() {
    return this._next;
  }
};
module.exports = LinkedList;
// main
// let linkedList = new LinkedList();

// linkedList.add(5, 0);
// linkedList.add(6, 1);
// linkedList.add(16, 2);
// linkedList.add(10, 3);
// linkedList.add(14, 4);

// linkedList.print();

// linkedList.remove(0);
// linkedList.add(120, linkedList.size() - 1);

// linkedList.print();

// linkedList.remove(linkedList.size() - 1);

// linkedList.print();

// linkedList.add(500, 2);

// linkedList.print();
