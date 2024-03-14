const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //Solution 1 - no stream just sending the whole chunk of data which will crash the app
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  //Solution 2 - streams
  const readable = fs.createReadStream("testttt-file.txt"); //that will produce chunks of data that are ready to consume and the stream emits then data event. So we can attach our listener on readable to listen to that event.
  readable.on("data", (chunk) => {
    res.write(chunk); //res is a writteable stream and so we can stream the content right to the client using the cb function from the .on listener. The res comes from the stram functonality.
  });
  readable.on("end", () => {
    res.end(); //that signals that no moro data will be written into the stream
  });
  readable.on("error", (err) => {
    console.log(err);
    res.statusCode = 500;
    res.end("File not found");
  });
});

server.listen(8000, "localhost", () => {
  console.log("listening...");
});
