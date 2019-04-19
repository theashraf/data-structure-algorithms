const insertionSort = arr => {
  for (let i = 1; i < arr.length; ++i) {
    let j = i - 1;
    let element = arr[i];

    while (j >= 0 && element < arr[j]) {
      arr[j + 1] = arr[j];
      --j;
    }

    arr[j + 1] = element;
  }
};

const arr = [10, 9, 8, 7, 5, 6];

insertionSort(arr);

console.log(arr);
