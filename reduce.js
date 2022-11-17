let arr = [1, 2, 3, 4, 5];

// let a = arr.reduce((prev, curr, index, arr) => {
//   console.log(prev, curr);
//   return prev + curr;
// });

// console.log(a);

// polyfill for reduce
// reduce takes
// @param : 1. Callback function,
//          2. prev value (optional)

Array.prototype.myReduce = function (fn, initialValue) {
  let accumultor = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumultor = accumultor ? fn(accumultor, this[i], i, this) : this[i];
  }
  return accumultor;
};

const sum = arr.myReduce((acc, cur, i, ar) => {
  return acc + cur;
}, 0);

console.log(sum);
