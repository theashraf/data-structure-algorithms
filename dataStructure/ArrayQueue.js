class Queue {
  constructor(capacity = 1000) {
    this._capacity = capacity;
    this._arr = Array(capacity);
    this._size = 0;
    this._front = 0;
    this._back = 0;
  }
  push(data) {
    if (this.isFull()) {
      throw new Error("Queue is full");
    } else if (this._back >= this._capacity) {
      throw new Error("Invalid Index");
    } else {
      this._arr[this._back++] = data;
      ++this._size;
    }
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    } else {
      const ret = this._arr[this._front++];
      --this._size;
      return ret;
    }
  }
  getFront() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    } else {
      return this._arr[this._front];
    }
  }
  getBack() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    } else {
      return this._arr[this._back - 1];
    }
  }
  isEmpty() {
    return this._size === 0;
  }
  isFull() {
    return this._size === this._capacity;
  }
  size() {
    return this._size;
  }
  print() {
    for (let i = this._front; i < this._back; ++i) {
      console.log(`index ${i} => ${this._arr[i]}`);
    }
  }
}

// main
// const q = new Queue(5);
// q.push(1);
// q.push(2);
// q.push(3);
// q.push(4);
// q.push(5);

// console.log(q.pop()); // 1
// console.log(q.pop()); // 2
// console.log(q.pop()); // 3
// console.log(q.pop()); // 4

// console.log(q.size());

// console.log(q.getBack());
// console.log(q.getFront());

// q.print();
