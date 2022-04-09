// Break it down

function charCount(str) {
  // do something
  // return an object with keys that are lowercase alphanumeric characters in the string;
  // values should be the counts for those characters
}

function charCount(str) {
  // make object to return at end
  // loop over string, for each character...
  // if the char is a number/letter AND key in object, add one count
  // if the char is a number/letter AND not in object, add it and set value to 1
  // if character is something else (space, period, etc.) dont't do anything
  // return object at end
}

// Solve or Simplify
function charCount(str) {
  // make object to return at end
  var result = {};
  // loop over string, for each character...
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    // if the char is a number/letter AND key in object, add one count
    if (result[char] > 0) {
      result[char]++;
      // if the char is a number/letter AND not in object, add it and set value to 1
    } else {
      result[char] = 1;
    }
  }

  // if character is something else (space, period, etc.) dont't do anything
  // return object at end
  return result;
}

// Look back and Refactor
function charCountLookback(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

// Look back and Refactor
function charCountRefactored(str) {
  var obj = {};
  for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

// console.log(charCountRefactored("hi there"));

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

console.log(checkAnagrams("bananabread", "readbananab"));
