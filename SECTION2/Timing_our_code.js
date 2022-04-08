const {performance} = require('perf_hooks');

// 1st solution - with loop
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// 2nd solution - with mathematical formula
function addUpTo2(n) {
  return n * (n + 1) / 2;
}

console.log("addUpTo2:", addUpTo2(3))

var t1 = performance.now();
addUpTo2(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)