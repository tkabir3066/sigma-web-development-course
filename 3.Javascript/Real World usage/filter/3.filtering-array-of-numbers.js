//1- Filtering Arrays of numbers

const ages = [-243, -132, 112, 40, -96];

const filtered = ages.filter((number) => number > 0);

console.log(filtered); //[ 112, 40 ]

//2 – Filtering an Object Array

//Any item above 200 ‘monies’ will be inserted into the new array and you can then display the result of the filter for the user.
const products = [
  { productName: "Television", price: "1000" },
  { productName: "Pendrive", price: "200" },
  { productName: "Camera", price: "450" },
  { productName: "Mouse", price: "120" },
];

const filteredProduct = products.filter((item) => item.price > 200);
console.log(filteredProduct);
/* 
[ { productName: 'Television', price: '1000' },
  { productName: 'Camera', price: '450' } ]
*/

//3 – Filtering wrong values in the Object

/* 
Let’s say that at the time of updating some records in the database the Ids were corrupted by some other piece of code. The goal here is to filter out the wrong id’s.

For this example I established 3 different conditions for a valid Id, using the Javascript array filter it was easy to create a new array with the correct id’s.
*/

const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: "12" },
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

const filteredArr = arr.filter((obj) => {
  return obj.id !== undefined && typeof obj.id === "number" && obj.id >= 0;
});

console.log(filteredArr);

//4 – Filtering repeated values from an array

/* Another very common situation is to remove repeated values from an array. To do this it was necessary to use the second parameter of the Javascript array filter function to be able to access the index of the current element being processed. */

const array = ["a", 2, "c", 4, "a", 2, 2, 5, "c"];

const filteredDuplicates = array.filter(
  (item, index) => array.indexOf(item) === index
);

console.log(filteredDuplicates); //[ 'a', 2, 'c', 4, 5 ]
