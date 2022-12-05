import { readInput } from "./tools.mjs";

const input: string = await readInput("src/data/day03.txt");

const alpha = "abcdefghijklmnopqrstuvwxyz".split("");

const getPrio = (char) => {
  const prio = alpha.indexOf(char.toLowerCase()) + 1;
  if (char === char.toUpperCase()) {
    return prio + 26;
  }
  return prio;
};

const rucksacks = input
  .trim()
  .split("\n")
  .map((content) => {
    const arrContent = [...content];
    const len = arrContent.length;
    const doubles = arrContent.filter((item, index) => {
      if (index >= len / 2) return false;
      return arrContent.includes(item, len / 2);
    });
    return getPrio(doubles[0]);
  });
const total = rucksacks.reduce((rucksack, sum) => rucksack + sum);
// console.log(input);
// console.log(rucksacks);
console.log("part 1:", total);
// console.log("part 2:", total_2);
