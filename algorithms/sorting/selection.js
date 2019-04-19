const selectionSort = arr => {
  for (let i = 0; i < arr.length; ++i) {
    let minIndex = i;
    for (let j = i; j < arr.length; ++j) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
};

const arr = [10, 9, 8];

selectionSort(arr);
console.log(arr);
