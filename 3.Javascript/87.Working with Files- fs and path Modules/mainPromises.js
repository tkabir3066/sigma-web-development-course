import fs from "fs/promises";

const a = await fs.readFile("harry.txt");
console.log(a.toString());

const b = await fs.writeFile("harry.txt", "This is \n\n\n amazing promise");
console.log(b);
