import fs from "fs";
import { URL } from "url";

const __dirname = new URL(".", import.meta.url).pathname.replace(/^\//, '');

/**
 *
 * @param {*} filePath
 * @returns {string[]}
 */
export async function readFile(filePath) {
  return new Promise((resolve, reject) => {
    console.log('reading inputs from ', __dirname + filePath)
    fs.readFile(__dirname + filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.split("\n").map(line => line.replace('\r', '')));
      }
    });
  });
}
