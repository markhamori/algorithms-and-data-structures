function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// console.log(power(2, 0)); //1
// console.log(power(2, 2)); //4
// console.log(power(2, 4)); //16

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(1)); //1
// console.log(factorial(2)); //2
// console.log(factorial(4)); //24
// console.log(factorial(7)); //5040

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// return 1 * productOfArray([2, 3])
//                     return 2 * productOfArray([3])
//                                         return 3 * productArray([])
//                                                          return 3 * 1
//                                         return 3
//                     return 2 * 3
// return 1 * 2 * 3
// return 6

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(6)); // 21
// console.log(recursiveRange(10)); // 55

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(4)); // 3
// console.log(fib(10)); // 55
// console.log(fib(28)); // 317811
// console.log(fib(35)) // 9227465

// return fib(4 - 1) + fib(4 - 2)
//                     return fib(3 - 1) + fib(1 - 2)
//                                         return fib(1) + fib(1)
//                                                     return 2
//                     return 2 + 1
// return 3

// console.log(fib(5)); // 5

// return fib(5 - 1) + fib(5 - 2)
//                     return fib(4 - 1) + fib(3 - 2)
//                                         return fib(3 - 1) + fib(1)
//                                                            return fib(1) + fib(1)
//                                                                            return 1
//                                          return 2 + 1
//                     return 3 + 1
// return 4 + 1

function power2(base, exponent) {
  if (exponent === 0) return 1;
  return base * power2(base, exponent - 1);
}

// console.log(power2(2, 0)); //1
// console.log(power2(2, 2)); //4
// console.log(power2(2, 4)); //16

// power2(2, 4)
//   return 2 * power(2, 3)
//     power(2, 3)
//       return 2 * power(2, 2)
//         power(2, 2)
//           return 2 * power(2, 1)
//             power(2, 1)
//               return 2 * power(1)
//             return 2 * 1 (2)
//         return 2 * 2 (4)
//     return 2 * 4 (8)
// return 2 * 8 (16)

function factorial2(num) {
  if (num === 0) return 1;
  return num * factorial2(num - 1);
}

// console.log(factorial2(1)); // 1
// console.log(factorial2(2)) // 2
// console.log(factorial2(4)); // 24
// console.log(factorial2(7)); // 5040

function productOfArray2(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray2(arr.slice(1));
}

// console.log(productOfArray2([1, 2, 3])); // 6
// console.log(productOfArray2([1, 2, 3, 10])); // 60

// productOfArray2([1,2,3])
//   return [1] * productOfArray2([2,3])
//     productOfArray2([2,3])
//       return [2] * productOfArray2([3])
//         productOfArray([3])
//           return [3] * productOfArray([])
//         return 3 * 1
//     return 2 * 3
// return 1 * 6

function recursiveRange2(num) {
  if (num === 0) return 0;
  return num + recursiveRange2(num - 1);
}
// console.log(recursiveRange2(6)); // 21
// console.log(recursiveRange2(10)); // 55

function fib2(n) {
  if (n <= 2) return 1;
  return fib2(n - 1) + fib2(n - 2);
}

// fib2(4)
//   return fib2(4 - 1) + fib2(4 - 2)
//   return fib2(3 - 1) + 1
//   return 1           + 1

// fib2(6); //8
//   return fib2(6 - 1) + fib2(6 - 2);
//     fib2(5) + fib2(4);
//       return fib2(5 - 1) + fib2(4 - 2);
//         fib2(4) + 1
//           return fib2(4 - 1) + 1
//             fib2(3) + 1
//               return fib2(3 - 1) + 1
//                 1 + 1
//                   return 1 + 1

// return fib(4 - 1) + fib(4 - 2)
//                     return fib(3 - 1) + fib(1 - 2)
//                                         return fib(1) + fib(1)
//                                                     return 2
//                     return 2 + 1
// return 3

console.log(fib2(4)); // 3
// console.log(fib2(10)); // 55
// console.log(fib2(28)); // 317811
// console.log(fib2(35)) // 9227465
