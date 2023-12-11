// selecting method-1

const boxes = document.getElementsByClassName("box");
console.log(boxes);
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

Array.from(boxes).forEach((e) => {
  console.log(e);
});

// selecting method-2

// const boxes = document.querySelector(".container").children;
// console.log(boxes);

function getRandomColor() {
  const max = 255;
  const min = 0;

  const val1 = Math.floor(Math.random() * (max - min + 1) + min);
  const val2 = Math.floor(Math.random() * (max - min + 1) + min);
  const val3 = Math.floor(Math.random() * (max - min + 1) + min);
  return `rgb(${val1}, ${val2}, ${val3})`;
}
Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = getRandomColor();
  e.style.color = getRandomColor();
});
