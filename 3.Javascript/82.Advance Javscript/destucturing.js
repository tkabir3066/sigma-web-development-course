//destructuring

//array destructuring ans rest operator
const arr = [1, 5];
const [x, y, ...rest] = [1, 5, 7, 8, 9, 10];
console.log(x); //1
console.log(y); //5
console.log(rest); // [7, 8, 9, 10]

//object destructuring

const user = {
  name: "Tutul",
  id: 101,
  job: "Web Developer",
};

const { name, id, job } = user;
console.log(name); //Tutul
console.log(id); //101
console.log(job); //Web Developer
