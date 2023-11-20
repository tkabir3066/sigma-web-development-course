console.log("Hey this is Tutorial 55");

//============ let ============//

let a = 5;
a = a + 1;

let b = 6;
let c = "Tutut";
let _a = "Shubham";
// var 55a = "Harry"; // invalid according to js variables naming rules

// console.log(a + b + 8); //19

// console.log(typeof a, typeof b, typeof c); // number, number, string

{
  let a = 66;
  console.log(a); //66
  //let is  block scope
}

//============ var ============//
{
  var num = 66;
  console.log(num); //66
  //let is  block scope
}
console.log(num); //66 // because var is always a global scope

//============ const ============//

// const a1 = 6;
// a1 = a1 + 1; // we can't reassign the value because a1 is const

// in modern javascript use let keyword instead of var

// =============Data types ===============//

//==========primitive===========//
let x = "Harry vai";
let y = 22;
let z = 3.55;
let p = true;
let q = undefined;
let r = null;

console.log(typeof x); //string
console.log(typeof y); //number
console.log(typeof z); //number
console.log(typeof p); //boolean
console.log(typeof q); //undefined
console.log(typeof r); //object // it's an  error in javascript, it's a bug typeof null should be null but here output is object
//This is a bug since the first release of ECMAScript which unfortunately can’t be fixed because it would break the existing code.

// =========== object ============//

let obj = {
  name: "Tutul",
  "job code": 5600,
};

console.log(obj); //{ name: 'Tutul', 'job code': 5600 }
obj.salary = "10crores";
console.log(obj); //{ name: 'Tutul', 'job code': 5600, salary: '10crores' }
obj.salary = "20crores";
console.log(obj); //{ name: 'Tutul', 'job code': 5600, salary: '20crores' }
