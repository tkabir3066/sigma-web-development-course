//fs

const fs = require("fs");
// console.log(fs);

console.log("starting...");
// fs.writeFileSync("harry.txt", "Hi, this is Harry");

// BEST APPROACH TO CREATE FILE IS-

fs.writeFile("harry2.txt", "Harry is a good boy", () => {
  console.log("done");

  fs.readFile("harry2.txt", (error, data) => {
    console.log(error, data.toString());
  });
});

fs.appendFile("harry.txt", " harry-robot", (error, data) => {
  console.log(data);
});
console.log("ending...");
