class ArrayQueue {
  constructor(capacity) {
    this._arr = Array(capacity || 100);
    this._size = 0;
    this._front = -1;
  }

  enqueue(data) {
    if (this.isFull()) {
      throw "Queue is full";
    } else {
      let position = (this._front + this._size) % this._arr.length;
      this._arr[position] = data;
      ++this._size;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw "Queue is Empty";
    } else {
      let data = this._arr[this._front];
      this._front = (this._front + 1) % this._arr.length;
      --this._size;
      return data;
    }
  }

  front() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    } else {
      return this._arr[this._front];
    }
  }

  isEmpty() {
    return this._size === 0;
  }

  isFull() {
    return this._size === this._arr.length;
  }

  size() {
    return this._size;
  }
}

// main

// const q = new ArrayQueue(10);
// q.enqueue(1);
// q.enqueue(5);
// q.enqueue(10);
// q.enqueue(3);

// console.log(q.front());
// console.log(q.dequeue());
// console.log(q.dequeue());
// q.enqueue(50);
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.size());
// console.log(q.front());
// console.log(q.dequeue());
// console.log(q.isEmpty());
