const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

//app.get or app.post or app.post or app.delete(path, handler)
app.get("/", (req, res) => {
  res.send("Hello World2!");
});
app.get("/about", (req, res) => {
  res.send("Hello, This is about page");
});
app.get("/contact", (req, res) => {
  res.send("Hello, This is contact page");
});
app.get("/blog", (req, res) => {
  res.send("Hello, This is blog page");
});
// app.get("/blog/intro-to-js", (req, res) => {
//   //logic to fetch intro to js from the db
//   res.send("Hello, Javascript");
// });
// app.get("/blog/intro-to-python", (req, res) => {
//   //logic to fetch intro to python from the db
//   res.send("Hello, python");
// });

//--short cut --//
app.get("/blog/:slug", (req, res) => {
  //url : http://localhost:3000/blog/intro-to-tutul?mode=dark&region=In
  console.log(req.params); //output: { slug: 'intro-to-tutul' }
  console.log(req.query); //output: { mode: 'dark', region: 'In' }

  //logic to fetch intro to js from the db
  res.send(`Hello, ${req.params.slug}`);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
