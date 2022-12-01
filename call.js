let person = {
  name: "mohit",
  country: "India",
};

let personDetail = function (age, year) {
  console.log(
    `${this.name} lives in ${this.country} and his age is ${age} and year is ${year}`
  );
};

// Call Polyfill
// Takes the context as an argument and following args which can be anything

Function.prototype.myCall = function (context = {}, ...args) {
  // Creating a unique function name in context obj so that no issue of duplicacy.
  let symbol = Symbol();
  
  context[symbol] = this;
  let result = context[symbol](...args);
  
  delete(context[symbol])
  
  return result
};

personDetail.myCall(person, 42, 2022);
