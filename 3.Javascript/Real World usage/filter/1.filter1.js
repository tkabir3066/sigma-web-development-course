const products = ["beans", "pizza", "chicken", "salmon"];

// Filter all products called pizza

const filteredProduct = products.filter((product) => {
  return product === "pizza";
});

console.log(filteredProduct);
