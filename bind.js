let person = {
  name: "mohit",
  country: "India",
};

let personDetail = function (age, year) {
  console.log(
    `${this.name} lives in ${this.country} and his age is ${age} and year is ${year}`
  );
};

Function.prototype.myBind = function (context, ...args) {
  context.fn = this;
  return function (...args2) {
    context.fn(...args, ...args2);
  };
};

let personFunction = personDetail.myBind(person, 60);
console.log(personFunction(45));
