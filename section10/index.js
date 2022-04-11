function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}

// console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
// console.log(linearSearch([100], 100)); // 0
// console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1

// Binary search Exercise
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (arr[middle] > val) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 3));

// [2, 5, 6, 9, 13, 15, 28, 30]
//  S        M              E

// [2, 5, 6, 9, 13, 15, 28, 30]
//              S   M       E

// [2, 5, 6, 9, 13, 15, 28, 30]
//                      SM  E

// [2, 5, 6, 9, 13, 15, 28, 30]
//                          SME

// Naive string search implementation
function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

naiveSearch("lorie loled", "lol");
