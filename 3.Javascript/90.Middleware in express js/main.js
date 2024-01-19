const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

const blog = require("./routes/blog");

// app.use(express.static("public"));
app.use("/blog", blog);

//middleware 1 - logger for our application
app.use((req, res, next) => {
  console.log(req.header);
  req.harry = "I am Tk bhai";
  // fs.writeFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`);
  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`);
  console.log(`${Date.now()} is a ${req.method}`);
  // res.send("Hacked by middleware 1");
  next();
});

//middleware 2
app.use((req, res, next) => {
  req.harry = "I am Rohan bhai";
  console.log("middleware 2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("Hello About! " + req.harry);
});
app.get("/contact", (req, res) => {
  res.send("Hello Contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
