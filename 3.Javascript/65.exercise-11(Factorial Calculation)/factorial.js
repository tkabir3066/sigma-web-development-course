/* 
Write a Program to calculate factorial of a number using reduce and for loops
*/

// factorial using for loop
let num = parseInt(prompt("Enter an integer: "));
let fact = 1;

for (let i = 1; i <= num; i++) {
  fact = fact * i;
}

console.log(`Factorial of ${num} is : ${fact}`);

// using reduce() method

// let arr = [1, 2, 3, 4, 5, 6];
let arr = [5, 4, 3, 2, 1];

let factorial = arr.reduce((acc, curVal) => {
  return acc * curVal;
}, 6);

console.log(factorial);
