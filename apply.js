let person = {
  name: "mohit",
  country: "India",
};

let personDetail = function (age, year) {
  console.log(this, "this");
  console.log(
    `${this.name} lives in ${this.country} and his age is ${age} and year is ${year}`
  );
};

Function.prototype.myApply = function (context = {}, args = []) {
  if (!Array.isArray(args)) {
    throw new Error("Passed Args is not Array");
  }
  context.fn = this;
  context.fn(...args);
};

personDetail.myApply(person, [27, 2022]);
