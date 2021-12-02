import path from "path";
import fs from "fs";
import { URL } from "url";

const __dirname = new URL(".", import.meta.url).pathname;

/**
 *
 * @param {*} filePath
 * @returns {string[]}
 */
export async function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, filePath), "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.split("\n"));
      }
    });
  });
}
