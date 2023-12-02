//======== map() =========//
// it works with an array
// return an array with all(?) substitutes
// results depend on how you manipulate the data
// must return from the callback function
// doesn't mutate the original array

const arr = [2, 3, 4, 5];

// square of elements of an array

// 1st
// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   let element = arr[i];
//   newArr.push(element ** 2);
// }

// console.log(newArr); //[ 4, 9, 16, 25 ]

const newArr = arr.map((num) => {
  return num ** 2;
});

console.log(newArr); //[ 4, 9, 16, 25 ]

//============= filter() ===============//
// it works with an array
// return an array
// results depend on condition written inside callback function
// must return from the callback function
// doesn't mutate the original array

let filteredArr = arr.filter((num) => {
  return num > 3;
});

console.log(filteredArr); //[ 4, 5 ]

// ============= reduce() method ===========//

// it works with an array
//  returns a reduced value based on you
// must return from the callback function
// does not mutate the original array

/* The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.   */

const reducedVal = arr.reduce((acc, curVal) => {
  return acc + curVal;
}, 0);

console.log(reducedVal); //14
