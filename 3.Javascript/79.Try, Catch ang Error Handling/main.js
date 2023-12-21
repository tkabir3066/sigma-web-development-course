// try, catch and error handling

let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");

if (a === "" || b === "" || isNaN(a) || isNaN(b)) {
  throw Error("Something Went wrong...");
}
let sum = parseInt(a) + parseInt(b);

let x = 1;
/* function main() {
  try {
    console.log("The sum is  ", sum * x);
    return true;
  } catch (error) {
    console.log("There are some error...  ");
    return true;
  }
  console.log("Files are being closed and db connection is being closed");
}

const c = main(); */

function main() {
  try {
    console.log("The sum is  ", sum * x);
    return true;
  } catch (error) {
    console.log("There are some error...  ");
    return false;
  } finally {
    console.log("Files are being closed and db connection is being closed");
  }
}

const c = main();

//========= Interview question ===============//
// why we use finally in javascript

// function er moddhe  try  or catch er modhe return korle porer kono code run hoi na but finally thakle finally block er code run hoye jai ....other kono code run hoi na // tobe finally only function bhetore kaj korbe
