//Looping through array

let numbers = [1, 3, 5, 8, 88, 95];

//========== for loop ===========//
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]); //1,3,5,8,88,95
}

//=========== for of loop ==============//

for (let num of numbers) {
  console.log(num); //1,3,5,8,88,95
}

// ========== forEach() loop ===============//
//The JavaScript array forEach() method is used to invoke the specified function once for each array element.

//array.forEach(callback(currentvalue,index,arr),thisArg)

numbers.forEach((value, index, arr) => {
  console.log(value);
});

// Array.from()
//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

console.log(Array.from("harry")); //[ 'h', 'a', 'r', 'r', 'y' ]
