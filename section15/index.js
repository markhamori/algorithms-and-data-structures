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

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
