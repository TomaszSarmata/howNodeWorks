console.log("Hello form the module"); //that will run only once in the file it was imported to due to caching

module.exports = () => {
  console.log("Log this beautiful text 😁");
};
