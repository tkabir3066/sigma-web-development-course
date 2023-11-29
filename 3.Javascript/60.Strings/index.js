////=============== Strings ==================////

let a = "Tutul";

console.log(a); //Tutul

console.log(a[0]); // T
console.log(a[1]); //u
console.log(a[2]); //t
console.log(a[3]); //u
console.log(a[4]); //l
console.log(a[5]); //undefined

console.log(a.length); //5

let name = "Tutul";
let friendName = "Rohan";

console.log("He is " + name + " and his friend name is " + friendName);
//Output : He is Tutul and his friend name is Rohan

// template literal

console.log(`He is ${name} and his friend name is ${friendName}`);
//Output: He is Tutul and his friend name is Rohan

let str = "India";
console.log(str.toUpperCase()); //INDIA
console.log(str.toLowerCase()); //india

//====== slice method ====//

let clientName = "Shivam";
console.log(clientName.slice(1, 4)); //hiv
console.log(clientName.slice(1)); //hivam

//========= replace method ========//
let clientName2 = "ShivamSh";
console.log(clientName.replace("Sh", "&&")); //&&ivam
// If there are two or more occurrence the first occurrence will be replaced

//------- concatenation ----------//
let firstName = "Tutul ";
let lastName = "Kabir";
console.log(firstName.concat(lastName)); //Tutul Kabir
console.log(firstName.concat(lastName, " Rinka", " Chetri")); //Tutul Kabir Rinka Chetri

//---------- trim ----------//
// to remove white spaces

let char = "  Tutul  ";
console.log(char.length); //9

let removeSpaces = char.trim();
console.log(removeSpaces.length); //5
