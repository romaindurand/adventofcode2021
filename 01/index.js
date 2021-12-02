import { readFile } from "../utils.js";

(async () => {
  const file = await readFile("01/input.txt");
  const resultPart1 = file.reduce((memo, line, index) => {
    if (index === 0) return memo;
    if (Number(line) > Number(file[index - 1])) memo++;
    return memo;
  }, 0);
  console.log({ resultPart1 });

  const resultPart2 = file.reduce((memo, line, index) => {
    if (index < 3) return memo;
    const windowSum = getWindowSum(file, index);
    const previousWindowSum = getWindowSum(file, index - 1);
    if (windowSum > previousWindowSum) memo++;
    return memo;
  }, 0);
  console.log({ resultPart2 });
})();

function getWindowSum(file, index) {
  return (
    Number(file[index - 2]) + Number(file[index - 1]) + Number(file[index])
  );
}
