// Merge sort

function merge(arr1, arr2) {
  let results = [];
  // make 2 pointers
  let i = 0;
  let j = 0;

  // loop through arr1 & arr2
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // If one of our array exhausted, we still want to continue the loop through other array
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  // If one of our array exhausted, we still want to continue the loop through other array
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  // return our array which contains all of our arrays elements
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73]));
