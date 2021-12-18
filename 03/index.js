import { readFile } from "../utils.js";

(async () => {
  const file = await readFile("03/input.txt");
  const { gammaRate, epsilonRate, binaryEpsilonRate, binaryGammaRate } =
    computeRates(file);
  const powerConsumption = gammaRate * epsilonRate;
  console.log({ powerConsumption, gammaRate, epsilonRate });

  computeGasRatings(binaryEpsilonRate, file);
})();

function computeGasRatings(bitCriteria, file) {
  let lines = [...file];
  let bitIndex = 0;
  while (lines.length > 1) {
    lines = lines.filter((line) => line[bitIndex] === bitCriteria[bitIndex]);
    bitIndex++;
  }
  console.log({ bitCriteria, lines });
}

function computeRates(lines) {
  const bit1Count = Array(lines[0].length).fill(0);
  lines.forEach((line) => {
    line.split("").forEach((char, index) => {
      if (Number(char) === 1) bit1Count[index]++;
    });
  });

  const binaryGammaRate = bit1Count.reduce((memo, count) => {
    memo += count > lines.length / 2 ? 1 : 0;
    return memo;
  }, "");
  const gammaRate = Number.parseInt(binaryGammaRate, 2);
  const binaryEpsilonRate = binaryGammaRate
    .split("")
    .map((char) => (char === "1" ? "0" : "1"))
    .join("");
  const epsilonRate = Number.parseInt(binaryEpsilonRate, 2);
  return { gammaRate, epsilonRate, binaryEpsilonRate, binaryGammaRate };
}
