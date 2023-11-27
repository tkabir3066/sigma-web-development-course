////==== Tutorial-58 ====//

//====  Functions  ====//
// A Javascript function is a block of code designed to perform a particular task

function nice(name) {
  console.log("Hey " + name + " you are nice!");
  console.log("Hey " + name + " you are good!");
  console.log("Hey " + name + " your tshirt is nice!");
  console.log("Hey " + name + " course is good too!");
}

// nice("Tutul");
// nice("Rohan");

/* function sum(num1, num2) {
  //   console.log(num1 + num2); //70

  return num1 + num2;
}

let result1 = sum(20, 50);
let result2 = sum(10, 50);
let result3 = sum(25, 15);
let result4 = sum(20, 70);

console.log("Sum of two numbers is = ", result1); //70 // Sum of two numbers is =  70
console.log("Sum of two numbers is = ", result2); // Sum of two numbers is =  60
console.log("Sum of two numbers is = ", result3); // Sum of two numbers is =  40
console.log("Sum of two numbers is = ", result4); // Sum of two numbers is =  90
 */

//---------- default parameter -------------//
function sum(num1, num2, num3 = 5) {
  //   console.log(num1 + num2); //70
  //   console.log(num2);
  return num1 + num2 + num3;
}

// let result1 = sum(20, 50);
let result1 = sum(50);
let result2 = sum(10, 50);
let result3 = sum(25, 15);
let result4 = sum(20, 70, 10);

// console.log(result1); //75
console.log(result1); //NaN
console.log(result2); //65
console.log(result3); //45
console.log(result4); //100

// number + undefined = NaN

console.log(33 + undefined); // NaN

// ===== arrow function ==== //

const func1 = (num) => {
  console.log("I am an arrow function", num);
};

func1(34);
func1(58);
func1(70);
