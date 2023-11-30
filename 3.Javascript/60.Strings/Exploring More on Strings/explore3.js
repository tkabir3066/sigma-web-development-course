const str = "Hello There";

// split methods

console.log(str.split()); //[ 'Hello There' ]
console.log(str.split("")); //[ 'H', 'e', 'l', 'l', 'o', ' ', 'T', 'h', 'e', 'r', 'e' ]
console.log(str.split(" ")); //[ 'Hello', 'There' ]

//// concat method

let firstName = "Tutul";
let lastName = " Kabir";

console.log(firstName.concat(lastName)); //'Tutul Kabir'

// charAt() method
console.log(str.charAt(1)); //e
console.log(str.charAt(3)); //l
console.log(str.charAt(6)); //T

// charCodeAt()

console.log(str.charCodeAt(0)); // 72 // ASCII value of H is 72
console.log(str.charCodeAt(1)); // 101 // ASCII value of e is 101
console.log(str.charCodeAt(2)); // 108 // ASCII value of l is 108
console.log(str.charCodeAt(3)); // 108 // ASCII value of l is 108

//search() method
// The search() method matches a string against a regular expression **
// The search() method returns the index (position) of the first match.
// The search() method returns -1 if no match is found.
// The search() method is case sensitive.

console.log(str.search("H")); //0
console.log(str.search("e")); //1
console.log(str.search("l")); //1
console.log(str.search("o")); //4
console.log(str.search("W")); //-1   // W not present in Str variable

// replace

console.log(str.replace("Hello", "hi")); // hi Therw // Hello ke replace kore hi esche

// pad
console.log(str.padStart(15, "*")); // ****Hello There

console.log(str.padEnd(15, "*")); // Hello There****
