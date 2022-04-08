const { performance } = require("perf_hooks");

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
  return (n * (n + 1)) / 2;
}

var t1 = performance.now();
addUpTo2(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

// Another example

function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
}

// countUpAndDown(10);
