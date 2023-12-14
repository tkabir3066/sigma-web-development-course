const box = document.querySelector(".box");
// console.log(box.innerText); //He I am a box
// console.log(box.textContent); //He I am a box

const container = document.querySelector(".container");
// console.log(container.innerHTML); //<div class="box">He I am a box</div>
// console.log(container.outerHTML);
console.log(container.tagName); //DIV
console.log(container.nodeName); //DIV

// to change the element

box.innerHTML = "Hey I am Harry";

// to hidden the html element
// box.hidden = true; // je element ta hidden korte chachi // ui te sei element er text show korbe na

//hasAttribute
console.log(box.hasAttribute("id")); //false
console.log(box.hasAttribute("class")); //true

//getAttribute

console.log(box.getAttribute("href")); //#

//setAttribute

console.log(box.setAttribute("href", "https://google.com"));
console.log(box.getAttribute("href")); //https://google.com

// to access the all attributes

console.log(box.attributes);

// kono web page ke browser e edit korte chaile console e
// document.designMode="on" likhte hobe

//dataset

console.log(box.dataset); //DOMStringMap {createdby: 'tutul', conceptby: 'shehan'}
