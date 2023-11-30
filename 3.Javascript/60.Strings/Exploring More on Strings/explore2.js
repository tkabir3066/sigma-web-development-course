// Javascript built in properties and method

//============== slice() method ================//
//The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

///Syntax:-
// slice(indexStart)
// slice(indexStart, indexEnd)

let str = "Hello there";

console.log(str.slice(1)); //ello there
console.log(str.slice(1, 5)); //ello
console.log(str.slice(1, 7)); //ello t
console.log(str.slice(-5, -2)); //the
console.log(str.slice(-5, -1)); //ther
console.log(str.slice(-5, 1)); //empty string

//============== substring() method ================//
//The JavaScript string substring() method fetch the string on the basis of provided index and returns the new sub string. It works similar to the slice() method with a difference that it doesn't accepts negative indexes. This method doesn't make any change in the original string.

// substring(indexStart)
// substring(indexStart, indexEnd)

//// substring onekta slice et motoi but negative number ke 0 hisebe consider kore
console.log(str.substring(2)); // llo there
console.log(str.substring(0, 5)); //Hello
console.log(str.substring(2, 5)); //llo
console.log(str.substring(6, 8)); //th
console.log(str.substring(-3, 4)); //Hell

//==========   difference between substring and slice   =====//

console.log(str.slice(6, 2)); // empty string
console.log(str.substring(6, 2)); //llo

// here with substring method startIndex flipped with end index but with slice method remained the same and output should be empty string
