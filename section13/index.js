// Insertion Sort

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    console.log("Current value: ", currentVal);

    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log("j value: ", j);
      console.log("arr[j] value: ", arr[j]);

      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
