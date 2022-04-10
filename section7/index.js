// First recursive function

function countDown(num) {
  // THE BASE CASE WITH RETURN
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// countDown(3);

// print 3
// countDown(2)
// print 2
// countDown(1)
// print 1
// countDown(0)
// print "All done"

// Second recursive function

function sumRange(num) {
  // THE BASE CASE WITH RETURN
  if (num === 1) return 1;
  // RECURSIVE CALL
  return num + sumRange(num - 1);
}

// console.log(sumRange(3));

// sumRange(3);
//   return 3 + sumRange(2);
//                return 2 + sumRange(1);
//                             return 1   <- Base case
//                return 2 + 1
//   return 3 + 3
// return 6

// Writing factorial iteratively
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;
}

// console.log(factorial(4));

// Writing factorial recursively

function factorialRec(num) {
  if (num === 1) console.log(1);
  return num * factorial(num - 1);
}

// console.log(factorialRec(3));

// factorialRec(3);
//       return 3 + factorialRec(2);
//                        return 2 + factorialRec(1);
//                                         return 1   <- Base case
//                        return 2 + 1
//       return 3 + 3
// return 6

// Helper method recursion
function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}

// Helper method recursion
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    // BASE CASE
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// PURE RECURSION
function collectOddValuesPure(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValuesPure([1, 2, 3, 4, 5]));

// collectOddValues([1,2,3,4,5])
// [1].concat(collectOddValues([2,3,4,5]))
//             [].concat(collectOddValues([3,4,5]))
//                       [3].concat(collectOddValues([4,5]))
//                                   [].concat(collectOddValues([5]))
//                                             [5].concat(collectOddValues([]))
//                                                         []
//                                             [5];
//                                    [].concat([5])
//                        [3, 5]
//             [].concat([3,5])
// [1].concat([3,5])
// [1,3,5]
