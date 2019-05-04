class ArrayList {
  constructor(capacity) {
    this._arr = Array(capacity || 1);
    this._size = 0;
  }

  // Amortized O(1)
  set(index, data) {
    if (index < 0 || index > this.size()) throw new Error("Invalid Index");
    if (index === this.size()) addBack(data);
    this._arr[index] = data;
  }

  // O(1)
  get(index) {
    if (index < 0 || index >= this.size()) {
      throw new Error("Invalid Index");
    } else if (this.isEmpty()) {
      throw new Error("List is Empty");
    } else {
      return this._arr[index];
    }
  }

  // Amortized O(1)
  addBack(data) {
    if (this.size() === this._arr.length) this._resize(2 * this._arr.length);
    this._arr[this._size++] = data;
  }

  // O(1)
  removeBack() {
    if (this.isEmpty()) throw new Error("List is empty");
    return this._arr[--this._size];
  }

  // O(n)
  _resize(capacity) {
    let tempArr = Array(capacity);
    for (let i = 0; i < this._arr.length; ++i) {
      tempArr[i] = this._arr[i];
    }
    this._arr = tempArr;
  }

  // O(1)
  size() {
    return this._size;
  }

  // O(1)
  isEmpty() {
    return this._size === 0;
  }
}

module.exports = ArrayList;
