
//const fs = require("fs");
import * as fs from 'fs';

 const  readFromDataFile = () => {
  const data = fs.readFileSync("file://data.json", "utf8");
  const result = Object.getOwnPropertyNames(data);

 for (const item of result) {
     console.log(item)
 }
}
export default readFromDataFile;