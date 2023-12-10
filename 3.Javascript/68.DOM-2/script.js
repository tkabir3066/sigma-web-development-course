//******* getElementsByClassName *******//

// const boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "red";

//******* getElementById *******//

// const box = document.getElementById("red");
// console.log(box);
// box.style.backgroundColor = "red";

//******* querySelector *******//

// document.querySelector(".box").style.backgroundColor = "green";

//******* querySelectorAll *******//
// document.querySelectorAll(".box").forEach((e) => {
//   e.style.backgroundColor = "green";
// });

//******* getElementsByTagName *******//

const divs = document.getElementsByTagName("div");

for (let div of divs) {
  div.style.backgroundColor = "blue";
}

//element.matches()
console.log(divs[4].matches("#red")); //true
