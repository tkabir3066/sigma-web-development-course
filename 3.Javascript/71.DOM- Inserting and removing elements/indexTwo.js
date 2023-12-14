const container = document.querySelector(".container");
const box = document.querySelector(".box");

/* let div = document.createElement("div");
div.innerText = "Hi, This is Tutul Kabir";
div.setAttribute("class", "created");

// container.append(div); // means at the end inside the container div will insert
container.prepend(div); // means at the start inside the container div will insert */

container.insertAdjacentHTML(
  "afterend",
  "<b>Hello, I am a big fan of Cristiano Ronaldo</b>"
);

//remove

// box.remove();

//classList

console.log(container.classList); //DOMTokenList(3) ['container', 'red', 'bg-green', value: 'container red bg-green']

console.log(container.className); //container red bg-green

container.classList.add("harry-bhai");
container.classList.remove("harry-bhai");
container.classList.remove("red");
container.classList.toggle("red");
container.classList.toggle("red");
