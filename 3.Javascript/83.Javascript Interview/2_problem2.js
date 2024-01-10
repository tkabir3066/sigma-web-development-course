//2. The Double Trouble:You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleElements(numbers) {
  const uniquesElms = numbers.filter(
    (number, index) => numbers.indexOf(number) === index
  );

  return uniquesElms.map((num) => {
    return num * 2;
  });
}

const numbers = [2, 4, 5, 8, 9, 8, 4, 5, 9, 10, 2];

console.log(doubleElements(numbers)); //[ 4, 8, 10, 16, 18, 20 ]
