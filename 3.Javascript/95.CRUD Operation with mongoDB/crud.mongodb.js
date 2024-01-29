use("CrudDb");

db.createCollection("courses");

//create
/* db.courses.insertOne({
  name: "Harry's Web Dev free course",
  price: 0,
  assignments: 12,
  projects: 45,
});

db.courses.insertMany([
  {
    name: "Introduction to Programming",
    price: 25,
    assignments: 8,
    projects: 20,
  },
  {
    name: "Data Science Essentials",
    price: 49.99,
    assignments: 15,
    projects: 30,
  },
  {
    name: "JavaScript Basics",
    price: 0,
    assignments: 10,
    projects: 25,
  },
  {
    name: "Python for Beginners",
    price: 19.99,
    assignments: 12,
    projects: 18,
  },
  {
    name: "Web Design Fundamentals",
    price: 15,
    assignments: 9,
    projects: 22,
  },
  {
    name: "Mobile App Development",
    price: 29.99,
    assignments: 20,
    projects: 40,
  },
  {
    name: "Artificial Intelligence in Practice",
    price: 59.99,
    assignments: 18,
    projects: 35,
  },
  {
    name: "Database Management",
    price: 12.99,
    assignments: 14,
    projects: 28,
  },
  {
    name: "Cybersecurity Fundamentals",
    price: 0,
    assignments: 15,
    projects: 32,
  },
  {
    name: "Responsive Web Development",
    price: 34.99,
    assignments: 11,
    projects: 26,
  },
]);
 */

// ---- read ----------//

/* const a = db.courses.find();
// const a = db.courses.find({ price: 0 });
// console.log(a);
// console.log(a.count());
console.log(a.toArray()); */

//// find one er khetre prothom je course object ta asbe seta ke return korbe

const b = db.courses.findOne();
// const a = db.courses.find({ price: 0 });
// console.log(a);
// console.log(a.count());
// console.log(b);

//--------- update----------//

db.courses.updateOne({ price: 0 }, { $set: { price: 100 } });

db.courses.updateMany({ price: 1000 }, { $set: { price: 100 } });
//---------delete----------//

db.courses.deleteOne({ price: 100 });

//https://www.mongodb.com/docs/manual/reference/operator/query/
