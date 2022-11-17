let arr = [1, 2, 3, 4, 5];

// Map method takes only one callback function

Array.prototype.myMap = function (fn) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(fn(this[i], i, this));
  }
  return res;
};

let res = arr.myMap((num, idx, ar) => {
  return num * 4;
});
