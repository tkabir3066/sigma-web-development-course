//---------------- splice() method -------------//
//The JavaScript array splice() method is used to add/remove the elements to/from the existing array. It returns the removed elements from an array. The splice() method also modifies the original array.

// Syntax:

//splice(start)
// splice(start, deleteCount);
// splice(start, deleteCount, item1);
// splice(start, deleteCount, item1, item2);
// splice(start, deleteCount, item1, item2, /* …, */ itemN);

let numbers = [1, 2, 3, 4, 5];

numbers.splice(2, 1);
console.log(numbers); //[ 1, 2, 4, 5 ]

numbers.splice(1, 0, 555, 222);
console.log(numbers); //[ 1, 555, 222, 2, 4, 5 ]

//---------------- slice() method -------------//
//The JavaScript array slice() method extracts the part of the given array and returns it. This method doesn't change the original array.

//Syntax:-
//array.slice(start,end)

let num = [1, 2, 3, 4];
console.log(num.slice(2)); // [3,4]
console.log(num); //[ 1, 2, 3, 4 ]
console.log(num.slice(1, 3)); //[ 2, 3 ]

//----------- reverse() method --------------- //
//The JavaScript array reverse() method changes the sequence of elements of the given array and returns the reverse sequence. In other words, the arrays last element becomes first and the first element becomes the last. This method also made the changes in the original array.

console.log(num.reverse()); // [ 4, 3, 2, 1 ]
