// Frequency Counter
// Time O(n)
function sameFrequency(n1, n2) {
  // Edge case(s)
  if (n1.toString().length !== n2.toString().length) return false;

  // Lookup object(s)
  const obj1 = {};
  const obj2 = {};

  // Obj1 elements
  for (let num of n1.toString()) {
    obj1[num] = obj1[num] + 1 || 1;
  }

  // Obj 2 elements
  for (let num of n2.toString()) {
    obj2[num] = obj2[num] + 1 || 1;
  }

  for (let key in obj1) {
    if (!key in obj2) return false;

    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }

  return true;
}

// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false

// Frequency Counter /  Multiple Pointers - Time Complexity O(n), Space Complexity O(n)
function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);

  // Init(s)
  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }

    start++;
    next++;
  }

  return false;
}

// One liner
function areThereDuplicates2() {
  return new Set(arguments).size !== arguments.length;
}

// console.log(areThereDuplicates2(1, 2, 3)); // false
// console.log(areThereDuplicates2(1, 2, 2)); // true
// console.log(areThereDuplicates2("a", "b", "c", "a")); //true

// Multiple Pointers - Time: O(n), Space O(1)
function averagePair(arr, num) {
  //Edge case(s)
  if (arr.length === 0) return false;

  // Init
  let i = 0;
  let j = arr.length - 1;

  // Loop through the array
  while (i < j) {
    let avg = arr[i] + arr[j] / 2;

    if (avg === num) {
      return true;
    } else if (avg > num) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

// console.log(averagePair([1, 2, 3], 2.5)); //true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
// console.log(averagePair([], 4)); //false

// Multiple Pointers - Time: O(n+m), Space: O(1)
function isSubsequence(str1, str2) {
  // Edge case(s)

  // Init
  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "string")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
