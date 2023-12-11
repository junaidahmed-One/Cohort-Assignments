const fs = require("fs");

fs.readFile("testFile.txt", "utf-8", (err, data) => {
  console.log(data);
});

// console.log("hello world");
// let a = 0;

// for (let i = 0; i < 10000000000000; i++) {
//   a += i;
// }

//console.log(a);

fs.appendFile(
  "testFile.txt",
  "This message is from appendFile fs library",
  "utf-8",
  (err, data) => {
    console.log("Content wriiten");
    //console.log(data);
  }
);
