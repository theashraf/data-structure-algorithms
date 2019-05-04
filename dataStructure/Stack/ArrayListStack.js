const List = require("../List/ArrayList");

class ArrayListStack {
  constructor() {
    this._list = new List();
  }
  push(data) {
    this._list.addBack(data);
  }
  pop() {
    return this._list.removeBack();
  }
  top() {
    return this._list.get(this._list.size() - 1);
  }
  size() {
    return this._list.size();
  }
  isEmpty() {
    return this._list.isEmpty();
  }
}
