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