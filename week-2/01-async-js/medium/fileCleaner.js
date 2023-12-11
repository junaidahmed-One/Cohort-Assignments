const fs = require("fs");
let cleanedData;
fs.readFile("messyFile.txt", "utf-8", (err, data) => {
  cleanedData = data.replace(/\s+/g, " ");
  fs.writeFile("messyFile.txt", cleanedData, "utf-8", (err) => {
    if (err) {
      throw new Error("Error while writting to file");
    }
    console.log("Cleaned up extra spaces");
  });
});
