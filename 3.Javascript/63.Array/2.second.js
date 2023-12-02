//========== IMPORTANT FOR INTERVIEW =============//
// delete
// delete is an operator
delete arr[2];
console.log(arr); // [ 1, 2, , 444, 7 ]
console.log(arr.length); //5 // after deleting this element length will not be changed
console.log(arr[2]); // undefined

//-------- concat() ----------//
// used to join arrays to the given array
//The concat() method of Array instances is used to join two or more arrays. This method does not change the existing arrays, but instead returns a new array.

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];

let concatArr = a1.concat(a2, a3);
console.log(concatArr); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(a1); //[ 1, 2, 3 ]

console.log(a2); //[ 4, 5, 6 ]

console.log(a3); //[ 7, 8, 9 ]

//------------ sort() method ---------------//
// sort() method is used to sort an array alphabetically
//The JavaScript array sort() method is used to arrange the array elements in some order. By default, sort() method follows the ascending order.
// modifies the original array

let a = [5, 1, 7, 4, 3];
let sortedAscending = a.sort((a, b) => {
  if (a < b) {
    return b - 1;
  }
});
let sortedDescending = a.sort((a, b) => b - a);
console.log(sortedAscending);
