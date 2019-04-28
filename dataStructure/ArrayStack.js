class Stack {
  constructor(capacity = 0) {
    this._capacity = capacity;
    this._arr = [];
    this._size = 0;
  }

  // O(n)
  push(data) {
    if (this.isFull()) {
      throw new Error("Stack is Full");
    } else {
      this._arr[this._size++] = data;
    }
  }

  // O(n)
  getTop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    } else {
      const top = this._size - 1;
      return this._arr[top];
    }
  }

  // O(n)
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    } else {
      return this._arr[--this._size];
    }
  }

  isEmpty() {
    return this._size === 0;
  }

  isFull() {
    return this._capacity === this._size;
  }

  size() {
    return this._size;
  }
}

// main
const stack = new Stack(10);

stack.push(5);
stack.push(10);
stack.push(5);
stack.push(10);
stack.push(5);
stack.push(10);
stack.push(5);
stack.push(10);
stack.push(5);
stack.push(10);

console.log(stack.size());

console.log(stack.getTop());
console.log(stack.pop());
console.log(stack.getTop());
console.log(stack.pop());

console.log(stack.size());
