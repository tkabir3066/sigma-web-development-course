//path
import path from "path";

let myPath =
  "d:WEB DEVLOPMENTsigma-web-dev-course\\3.Javascript87.Working with Files- fs and path Modulespath.js\\harry.txt";
console.log(path.extname(myPath)); //.txt
console.log(path.basename(myPath)); //harry.txt

console.log(path.join("c:/", "programs\\harry.txt")); //c:\programs\harry.txt
