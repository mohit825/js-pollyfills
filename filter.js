let arr = [1, 2, 3, 4, 5];

// Polyfill for filter
// It also returns a new Array and filters a new Array with the given condition
// It aslo recieves one callback/function similar to map method

Array.prototype.myFilter = function (callback) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

let result = arr.myFilter((num, index, arr) => {
  return num % 2 === 0;
});

console.log(result);
