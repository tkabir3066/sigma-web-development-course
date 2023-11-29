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
console.log(clientName.slice(1, 6)); //hiv
