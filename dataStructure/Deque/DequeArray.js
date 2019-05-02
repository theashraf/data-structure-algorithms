class Deque {
  constructor(capacity) {
    this._arr = Array(capacity || 100);
    this._size = this._first = 0;
  }
  // O(1)
  addFirst(data) {
    if (this._size === this._arr.length) throw new Error("Deque is Full");
    else if (this.isEmpty()) {
      this._arr[this._first] = data;
      ++this._size;
    } else {
      this._first = (this._first - 1 + this._arr.length) % this._arr.length;
      this._arr[this._first] = data;
      ++this._size;
    }
  }
  // O(1)
  addLast(data) {
    if (this._size === this._arr.length) throw new Error("Deque is Full");
    else if (this.isEmpty()) {
      this._arr[this._first] = data;
      ++this._size;
    } else {
      const last = (this._first + this.size()) % this._arr.length;
      this._arr[last] = data;
      ++this._size;
    }
  }
  // O(1)
  removeFirst() {
    if (this.isEmpty()) {
      return null;
    } else {
      let data = this._arr[this._first];
      this._first = (this._first + 1 + this._arr.length) % this._arr.length;
      --this._size;
      return data;
    }
  }
  // O(1)
  removeLast() {
    if (this.isEmpty()) {
      return null;
    } else {
      let data = this._arr[(this._first + this.size() - 1) % this._arr.length];
      --this._size;
      return data;
    }
  }
  // O(1)
  first() {
    return this.isEmpty() ? null : this._arr[this._first];
  }
  // O(1)
  last() {
    return this.isEmpty()
      ? null
      : this._arr[(this._first + this.size() - 1) % this._arr.length];
  }
  // O(1)
  isEmpty() {
    return this._size === 0;
  }
  // O(1)
  size() {
    return this._size;
  }
}

// main
// const q = new Deque(4);

// q.addFirst(3);
// q.addFirst(7);
// q.addFirst(11);
// q.addLast(5);

// console.log(q.first());
// console.log(q.size());
// console.log(q.first());
// console.log(q.last());
// console.log(q.removeLast());
// console.log(q.first());
// console.log(q.last());
// console.log(q.first());
