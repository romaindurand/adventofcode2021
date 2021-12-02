import { readFile } from "../utils.js";

(async () => {
  const file = await readFile("01/input.txt");
  const result = file.reduce((memo, line, index) => {
    if (index === 0) return memo;
    if (Number(line) > Number(file[index - 1])) memo++;
    return memo;
  }, 0);
  console.log({ result });
})();
