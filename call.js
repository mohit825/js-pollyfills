let person = {
  name: "mohit",
  country: "India",
};

let personDetail = function (age, sum) {
  console.log(this, "this");
  console.log(
    `${this.name} lives in ${this.country} and his age is ${age} and ${sum}`
  );
};

// Call Polyfill
// Takes the context as an argument and following args which can be anything

Function.prototype.myCall = function (context = {}, ...args) {
  context.fn = this;
  context.fn(...args);
};

personDetail.myCall(person, 42, 54);
