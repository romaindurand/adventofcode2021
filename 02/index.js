import { readFile } from "../utils.js";

(async () => {
  const file = await readFile("02/input.txt");
  let position = 0;
  let depth = 0;
  file.forEach((line) => {
    const [command, value] = line.split(" ");
    switch (command) {
      case "up":
        depth -= Number(value);
        break;
      case "down":
        depth += Number(value);
        break;
      case "forward":
        position += Number(value);
        break;
    }
  });
  console.log({ position, depth });
  const resultPart1 = position * depth;
  console.log({ resultPart1 });
})();

(async () => {
  const file = await readFile("02/input.txt");
  let position = 0;
  let depth = 0;
  let aim = 0;
  file.forEach((line) => {
    const [command, value] = line.split(" ");
    switch (command) {
      case "down":
        aim += Number(value);
        break;
      case "up":
        aim -= Number(value);
        break;
      case "forward":
        position += Number(value);
        depth += aim * Number(value);
        break;
    }
  });
  console.log({ position, depth });
  const resultPart2 = position * depth;
  console.log({ resultPart2 });
})();
