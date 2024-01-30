const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./models/Employee");
const app = express();
const port = 3000;
mongoose.connect("mongodb://127.0.0.1:27017/company");
app.set("view engine", "ejs");

const getRandom = (arr) => {
  let rno = Math.floor(Math.random() * (arr.length - 1));
  return arr[rno];
};

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

const randomNames = ["Sohan", "Mohan", "Shubham", "Johan", "Kohan"];
const randomLang = ["python", "js", "java", "C++", "Go"];
const randomCities = ["Kolkata", "Mumbai", "Delhi", "Darjeeling", "Gangtok"];
app.get("/generate", async (req, res) => {
  // Clear the collection Employee
  await Employee.deleteMany({});
  //generate random data
  for (let i = 0; i < 10; i++) {
    const e = await Employee.create({
      name: getRandom(randomNames),
      salary: Math.floor(Math.random() * 22000),
      language: getRandom(randomLang),
      city: getRandom(randomCities),
      isManager: Math.random() > 0.5 ? true : false,
    });

    console.log(e);
  }
  res.render("index", { foo: "FOO" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
