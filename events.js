const EventEmitter = require("events");

//setting up a new class that will inherit from the emiter class

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

//setting up listeners / observers
myEmitter.on("newSale", () => {
  console.log("there was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("customer name: Tomasz");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock`);
});

//observer pattern
myEmitter.emit("newSale", 9);
