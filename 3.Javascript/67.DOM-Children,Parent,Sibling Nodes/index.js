const body = document.body;
console.log(body.childNodes); //NodeList(4) [text, div.container, text, script]

console.log(body.childNodes[0]); //#text

let container = body.childNodes[1];
console.log(container.firstChild); //#text
console.log(container.lastChild); //#text
console.log(container.firstElementChild); // Box1
console.log(container.lastElementChild); // Box5

container.lastElementChild.style.color = "green";
container.lastElementChild.style.backgroundColor = "orange";

console.log(container.lastElementChild.parentElement); //div.container

console.log(container.children); //HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
console.log(container.children[1].nextElementSibling); // Box-3
console.log(container.children[4]); // Box-5
console.log(container.children[4].previousElementSibling); // Box4
console.log(container.children[4].previousSibling); //#text
