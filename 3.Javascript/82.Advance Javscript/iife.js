//Advanced Javascript

//IIFE (Immediately Invoked Function Expression)

async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 2000);
  });
}

(async function main() {
  const a = await sleep();
  console.log(a);
  const b = await sleep();
  console.log(b);
})();
