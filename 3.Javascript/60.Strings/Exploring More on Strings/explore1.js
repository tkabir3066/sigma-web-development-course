//--------- exploring more on Javascript strings-----------------//

// Javascript built in properties and method

let str = "Hello There";

//====== length property ==========//
//The length data property of a String value contains the length of the string
console.log(str.length); // 11 (with space, because space also a character)

//=========== toUpperCase() ===================//
//The toUpperCase() method of String values returns this string converted to uppercase.
console.log(str.toUpperCase()); //HELLO THERE

//============== toLowerCase() ==================//
//The toLowerCase() method of String values returns this string converted to lower case.
console.log(str.toLowerCase()); //hello there

// ============ indexOf() ============//

//The JavaScript string indexOf() method is used to search the position of a particular character or string in a sequence of given char values and  returns the index of the first occurrence of the specified substring.. This method is case-sensitive.
// The index position of first character in a string is always starts with zero. If an element is not present in a string, it returns -1.

console.log(str.indexOf("l")); //2
console.log(str.indexOf("T")); //6
console.log(str.indexOf("t")); //-1 (because t is not present here)

// ============ lastIndexOf() ============//
//It provides the position of a char value present in the given string by searching a character from the last position and returns the index of the first occurrence of the specified substring.
//The lastIndexOf() method is case-sensitive. The index position of first character in a string is always starts with zero. If an element is not present in a string, it returns -1

console.log(str.lastIndexOf("l")); //3
console.log(str.lastIndexOf("T")); //6
console.log(str.lastIndexOf("t")); //-1
console.log(str.lastIndexOf("d")); //-1

//================== includes() ====================//

//The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

console.log(str.includes("H")); //True
console.log(str.includes("h")); //True
console.log(str.includes("T")); //True
console.log(str.includes("t")); //false, because t is not present here

//====== startsWth() and endsWith()===============//

//The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.
//The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.
console.log(str.startsWith("Hello")); //true
console.log(str.startsWith("there")); //false
console.log(str.endsWith("There")); //true
console.log(str.endsWith("there")); //false, because case sensitive

//========== trim() =============//
//It trims the white space from the left and right side of the string.

const str2 = "     hello there     ";
console.log(str2.length); //21

const trimedStr = str2.trim();
console.log(trimedStr.length); // 11
