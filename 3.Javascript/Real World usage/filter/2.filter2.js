const products = [
  {
    name: "Biodegradable Beans",
    price: "7$",
    market: "Acropolis Mall",
  },
  {
    name: "Posh Pizza",
    price: "16.5$",
    market: "Great Mall",
  },
];

const filteredProduct = products.filter(
  (product) => product.market === "Great Mall"
);

console.log(filteredProduct); //[ { name: 'Posh Pizza', price: '16.5$', market: 'Great Mall' } ]
