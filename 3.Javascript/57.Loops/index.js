////==== Tutorial-57 ====////

// Loops
let a = 1;

// console.log(a);
// console.log(a + 1);
// console.log(a + 2);
// console.log(a + 3);

for (let i = 0; i < 100; i++) {
  //   console.log(a + i);
}

let obj = {
  name: "Harry",
  role: "Programmer",
  company: "CodeWithHarry AI",
};

// ================ for in loop ================//
for (const key in obj) {
  const element = obj[key];
  console.log(key);
  /*
'name' 
'role' 
'company' 
   */

  console.log(element);
  /* 
'Harry' 
'Programmer' 
'CodeWithHarry AI'
  */
}

// ========== for of ==========//

for (const char of "Tutul") {
  console.log(char);
  /* 
'T' 
'u' 
't' 
'u' 
'l'
  */
}

// ======== while loop =========//

// let i = 0;
// while (i < 5) {
//   console.log(i); //0,1,2,3,4
//   i++;
// }

// ========= do while loop =========//
let i = 5;
do {
  console.log(i);
  i++;
} while (i < 5);

//=========== while vs do while =============//

// Do / While VS While is a matter of when the condition is checked. A while loop checks the condition, then executes the loop. A Do/While executes the loop and then checks the conditions.
