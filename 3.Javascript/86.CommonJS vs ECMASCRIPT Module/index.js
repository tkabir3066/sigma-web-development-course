// const http = require("node:http");
// const fs = require("fs");

// import http from "http";

// const hostname = "127.0.0.1";
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h1>Hello World</h1>");
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

import { num1, num2, num3, num4 } from "./myModule.js";
import myObj from "./myModule.js";
console.log(num1); //10
console.log(num2); //25
console.log(num3); //30
console.log(num4); //45

console.log(myObj);
