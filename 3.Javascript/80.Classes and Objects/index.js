//Classes and Objects

// const obj = {
//   a: 1,
//   b: "Harry",
// };

// console.log(obj);

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
// };

// rabbit._proto_ = animal; // sets rabbit.[[Prototype]] = animal

class Animal {
  constructor(name) {
    this.name = name;
    console.log("object is created...");
  }
  eats() {
    console.log("kha raha hoon");
  }
  jumps() {
    console.log("kood raha hoon");
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    // this.name = name;
    console.log("object is created and he is lion...");
  }

  //overriding method
  eats() {
    console.log("kha raha hoon and roo raha hoon");
  }
}

const a = new Animal("Bunny");
console.log(a);
console.log(a.name);
// console.log(a.eats());
// console.log(a.jumps());

const lion = new Lion("Sher");
lion.eats();
console.log(lion instanceof Lion); //true
console.log(lion instanceof Animal); //true
