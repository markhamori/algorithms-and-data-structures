function isPalindrome(str) {
  // It return with "o", so str length === 1 -> true
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  // if (t === t) return isPalidrom(acoca)
  // if (a === a) return isPalidrom(coc)
  // if (c === c) return isPalidrom(o)
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

// console.log(isPalindrome("awesome")); // false
// console.log(isPalindrome("foobar")); // false
// console.log(isPalindrome("tacocat")); // true
// console.log(isPalindrome("amanaplanacanalpanama")); // true
// console.log(isPalindrome("amanaplanacanalpandemonium")); // false

// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, callback) {
  // Base case(s)
  if (arr.length === 0) return false;
  // If our callback function returns true, its true
  if (callback(arr[0])) return true;

  return someRecursive(arr.slice(1), callback);
}

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], isOdd)); // false
// console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

// console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
