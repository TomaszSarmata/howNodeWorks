const EventEmitter = require("events");

const myEmitter = new EventEmitter();

//setting up listeners
myEmitter.on("newSale", () => {
  console.log("there was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("customer name: Tomasz");
});

myEmitter.emit("newSale");
