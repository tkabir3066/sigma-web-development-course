//list of all mouse events
//https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
const btnElement = document.getElementById("btn");

/* // click event
btnElement.addEventListener("click", () => {
  const box = document.querySelector(".box");
  box.innerHTML = `<b>Yayy! you were clicked</b> Enjoy your click`;
}); */

/* // dblclick event
btnElement.addEventListener("dblclick", () => {
  const box = document.querySelector(".box");
  box.innerHTML = `<b>Yayy! you were clicked</b> Enjoy your click`;
});
 */

// contextmenu (right click)
btnElement.addEventListener("contextmenu", () => {
  alert("Don't hack us by right click please");
});
