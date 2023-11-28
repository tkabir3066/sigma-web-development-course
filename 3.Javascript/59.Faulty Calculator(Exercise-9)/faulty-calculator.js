/*
  Create a faulty calculator using Javascript 
  
  This faulty calculator does following :

  1. It takes two numbers as an input from the user
  2. It performs as follows:

  + -----> -
  * -----> +
  - -----> /
  / -----> **
  
  it performs wrong operation 10% of the times
  
  */

let randomNum = Math.random();

let a = +prompt("Enter first number: ");
let b = prompt("Enter operation: ");
let c = +prompt("Enter second number: ");

if (randomNum > 0.1) {
  // perform correct calculation
  console.log(`The result is ${eval(`${a} ${b} ${c}`)}`);
} else {
  // perform wrong calculation
  b = obj[b];
  console.log(`The result is ${eval(`${a} ${b} ${c}`)}`);
}
