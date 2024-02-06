// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg
// 7. harry.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

import fs from "fs/promises";

let mypath =
  "D:\\WEB DEVLOPMENT\\sigma-web-dev-course\\3.Javascript\\91.Exercise-15 Clear and Clutter";

const files = await fs.readdir(mypath);
console.log(files);
