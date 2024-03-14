// console.log(arguments);
// console.log("here!!!", require("module").wrapper);

// MODULE.EXPORTS
///////////////////
const CanBeAnyName = require("./test-module-1"); //saving here the return value of the module.exports which will evaluate to our class

const calc1 = new CanBeAnyName(); // creating a new instance of a calculator
console.log(calc1.add(1, 2));
console.log(calc1.multiply(5, 10));
//////////////////////

//EXPORTS
//we are using the shorthand here to achieve the same as above
const calc2 = require("./test-module-2"); //calc2 is the export object here
console.log(calc2.add(2, 5), calc2.multiply(2, 5));
