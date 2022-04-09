// Frequency counter pattern
function same(arr1, arr2) {
  // Check the edge case
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Loop through the first array
  for (let i = 0; i < arr1.length; i++) {
    // What's the index of one squared in the second array (loop)
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // If the correctIndex is -1 meaning that it's not in there
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    // Removes the correct index from the array
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// same([1, 2, 3, 2], [9, 1, 4, 4]);

// Frequency counter pattern - refactored
function sameRefactored(arr1, arr2) {
  // Edge case
  if (arr1.length !== arr2.length) {
    return false;
  }
  // These two objects are going to count the frequency of individual values in the arrays
  // It will end up with two objects in the end
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  // Loop over the first object
  // We need to have four occur two times in other object
  for (let key in frequencyCounter1) {
    // if there no key squared 2 in the second object
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // if the second objects key squared is not equal to first objects key
    // So in two case, we check there are two four's
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// sameRefactored([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);

// Anagram challenge

// Inputs will be single words (won't be spaces, won't be periods, any punctuation, any numbers)
// They are all lowercase
function validAnagram(str1, str2) {
  // Check edge cases
  if (str1.length !== str2.length) return false;

  // Create objects
  let firstStringObject = {};
  let secondStringObject = {};

  // Loop through str1 letters
  for (let char of str1) {
    firstStringObject[char] = (firstStringObject[char] || 0) + 1;
  }

  // Loop through str2 letters
  for (let char of str2) {
    secondStringObject[char] = (secondStringObject[char] || 0) + 1;
  }

  // Loop through first string object keys
  for (let key in firstStringObject) {
    // Check if there is no same key in the second string object
    if (!(key in secondStringObject)) return false;

    // Check if there are same amount of letter in the object
    if (secondStringObject[key] !== firstStringObject[key]) return false;
  }

  return true;
}

// Other solution
function validAnagram2(first, second) {
  // Check edge case(s)
  if (first.length !== second.length) return false;

  // Create new object
  const lookup = {};

  // Loop through first string letters
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // Condition check - if the letter is in the obj, add + 1, else set it to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  // Loop through the second string letters
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    // Check that the letter is in the object or not
    if (!lookup[letter]) return false;

    // If its there, subtract - 1 from the letter value
    lookup[letter] -= 1;
  }

  return true;
}

// Tests
// console.log(validAnagram2("", "")); // true
// console.log(validAnagram2("aaz", "zza")); // false
// console.log(validAnagram2("anagram", "nagaram")); // true
// console.log(validAnagram2("rat", "car")); // false
// console.log(validAnagram2("awesome", "awesom")); // false
// console.log(validAnagram2("qwerty", "qeywrt")); // true
// console.log(validAnagram2("texttwisttime", "timetwisttext")); // true

function checkAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const obj = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    if (!obj[letter]) return false;

    obj[letter] -= 1;
  }

  return true;
}

// console.log(checkAnagrams("bananabread", "readbananab"));

// Multiple pointers pattern

// NAIVE SOLUTION - Quadratic Time complexity O(n^2) - space complexity O(1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// REFACTORED SOLUTION - Linear Time complexity O(n) - Space complexity O(1)
function sumZeroRef(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// console.log(sumZeroRef([-4, -3, -2, -1, 0, 5, 10]));

// SECOND EXAMPLE
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// countUniqueValues([]); // 0
// countUniqueValues([-2, -1, -1, 0, 1]); // 4

// Sliding Window Pattern
// NAIVE SOLUTION ( Quadratic Time complexity O(n^2))
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    console.log(arr.length - num + 1);
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// Refactored solution (Linear Time Complexity O(n))
function maxSubarraySumRef(arr, num) {
  // Edge case(s)
  if (arr.length < num) return null;

  // init maxSum and tempSum
  let maxSum = 0;
  let tempSum = 0;

  // adding first three digits and store them in maxSum (17)
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // tempSum = (0)
  // after the loop tempSum = 10 so maxSum = 10
  tempSum = maxSum;
  // starting the loop with num, cause we got sum above
  for (let i = num; i < arr.length; i++) {
    // tempSum = (6 + 9 + 2) - 6 + 1
    tempSum = tempSum - arr[i - num] + arr[i];
    // It updates maxSum, if tempSum larger (10). We take the maximum from maxSum vs tempSum
    maxSum = Math.max(maxSum, tempSum);
  }
  // 10
  return maxSum;
}

// console.log(maxSubarraySumRef([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); //19

// maxSubarraySumRef([1, 2, 5, 2, 8, 1, 5], 2); // 10
// maxSubarraySumRef([1, 2, 5, 2, 8, 1, 5], 4); // 17
// maxSubarraySumRef([4, 2, 1, 6], 1); // 6
// maxSubarraySumRef([4, 2, 1, 6, 2], 4); // 13
// maxSubarraySumRef([], 4); // null

// Divide and conquer pattern

// NAIVE SOLUTION - linear search (Time complexity O(n))
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

//Refactored Solution - binary search (Time complexity log(n))
function searchRef(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}
