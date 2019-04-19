const bubbleSort = arr => {
  for (let j = 0; j < arr.length; ++j) {
    let swapped = false;
    for (let i = 0; i < arr.length - 1 - j; ++i) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
};

const arr = [10, 9, 8, 4, 3, 2, 1, 0];
bubbleSort(arr);

console.log(arr);
