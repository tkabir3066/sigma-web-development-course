//spread operator

function getSum(a, b, c) {
  console.log(a, b, c);
  return a + b + c;
}

const numbers = [1, 4, 6];
const sum = getSum(...numbers);
console.log(sum); //11
