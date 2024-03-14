const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //Solution 1
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  //Solution 2 - streams
  const readable = fs.createReadStream("test-file.txt"); //that will produce chunks of data that are ready to consume and the stream emits then data event. So we can attach our listener on readable to listen to that event.
  readable.on("data", (chunk) => {
    res.write(chunk); //res is a writteable stream and so we can stream the content right to the client using the cb function from the .on listener
  });
});

server.listen(8000, "localhost", () => {
  console.log("listening...");
});
