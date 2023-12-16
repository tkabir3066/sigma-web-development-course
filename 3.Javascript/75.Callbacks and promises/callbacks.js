// Callbacks

/* const callback = (arg) => {
  console.log(arg);
};
const loadScript = (src, callback) => {
  const sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("harry");

  document.head.append(sc);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
 */

const fn = () => {
  console.log("khaibari");
};

const callback = (arg, fn) => {
  console.log(arg);
  fn();
};
const loadScript = (src, callback) => {
  const sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("harry", fn);

  document.head.append(sc);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
