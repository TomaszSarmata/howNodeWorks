// console.log(arguments);
// console.log("here!!!", require("module").wrapper);

const CanBeAnyName = require("./test-module-1"); //saving here the return value of the module.exports which will evaluate to our class

const calc1 = new CanBeAnyName(); // creating a new instance of a calculator
console.log(calc1.add(1, 2));
console.log(calc1.multiply(5, 10));
