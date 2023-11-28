// loops inside function

//========= using  simple for loop =============//

/* const arr = ["Tutul", "Ayan", "Soyab", "Kavya"];

function printName(names) {
  let outputNames = "";
  for (let i = 0; i < names.length; i++) {
    outputNames = outputNames + names[i];

    if (i != names.length - 1) {
      outputNames += ", ";
    }
  }

  return outputNames;
}

console.log(printName(arr)); //Tutul, Ayan, Soyab, Kavya */

//=========== using for of loop =============//

const arr = ["Tutul", "Ayan", "Soyab", "Kavya"];

function printName(names) {
  let outputNames = "";
  for (let name of names) {
    outputNames = outputNames + name;

    if (names.indexOf(name) !== names.length - 1) {
      outputNames += ", ";
    }
  }

  return outputNames;
}

console.log(printName(arr)); //Tutul, Ayan, Soyab, Kavya
