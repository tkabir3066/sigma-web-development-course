//hoisting
//In JavaScript, hoisting allows us to use functions and variables before they're declared

console.log(foo); //undefined
var foo = "foo";

//undeclared variable
console.log(foo); // Uncaught ReferenceError: foo is not defined
foo = "foo"; // Assigning a variable that's not declared is valid

//Variables declared with let and const are hoisted but not initialized with a default value. Accessing a let or const variable before it's declared will result in a ReferenceError:

console.log(foo); // Uncaught ReferenceError: Cannot access 'foo' before initialization

let foo = "bar"; // Same behavior for variables declared with const

//document: https://www.freecodecamp.org/news/what-is-hoisting-in-javascript/
