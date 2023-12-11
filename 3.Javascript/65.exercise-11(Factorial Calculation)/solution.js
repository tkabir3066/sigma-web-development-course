const number = 6;

function factorial(number) {
  let arr = Array.from(Array(number + 1).keys());
  console.log(arr); //[ 0, 1, 2, 3, 4, 5 ]

  console.log(arr.slice(1)); //[ 1, 2, 3, 4, 5, 6 ]

  let factorial = arr.slice(1).reduce((acc, currVal) => {
    return acc * currVal;
  });

  console.log(factorial); //720

  return factorial;
}

const fact = factorial(number);
console.log(fact); //720
