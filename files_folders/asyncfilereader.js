import { readFile } from "fs";

readFile("examplefile.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File Content:", data);
});
