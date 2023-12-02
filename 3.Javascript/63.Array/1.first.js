// Array
//Arrays are mutable

let arr = [1, 2, 3, 5, 7];
/////index 0  1  2  3  4
console.log(arr);
console.log(arr.length);

console.log(arr[0]); //1
console.log(arr[1]); //2
console.log(arr[2]); //3
console.log(arr[3]); //5

// We can also update data at the same time
arr[3] = 444;
console.log(arr); //[ 1, 2, 3, 444, 7 ]

console.log(typeof arr); // object

// ===== Array methods ==========//

// toString()

let convertToStr = arr.toString();
console.log(convertToStr); //1,2,3,444,7
console.log(typeof convertToStr); // string

// join()

console.log(arr.join()); // 1,2,3,444,7

console.log(typeof arr.join());
console.log(arr.join(" and ")); // '1 and 2 and 3 and 444 and 7'

//---------- push() method ------------------//
//// adding element at the end of the array
// push method also returns the new length of the array.

arr.push("Harry");
console.log(arr); //[ 1, 2, 3, 444, 7, 'Harry' ]

//---------- pop() method ------------------//
// The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
arr.pop();
console.log(arr); //[ 1, 2, 3, 444, 7 ]

//---- unshift() method ---------//
//The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.

arr.unshift("Pushpa");
console.log(arr); //[ 'Pushpa', 1, 2, 3, 444, 7 ]

//----------- shift() method --------------//
//The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.

arr.shift();
console.log(arr); //[ 1, 2, 3, 444, 7 ]
