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

const rucksacks = input.trim().split("\n");
const doubles = rucksacks.map((content) => {
  const arrContent = [...content];
  const len = arrContent.length;
  const doubles = arrContent.filter((item, index) => {
    if (index >= len / 2) return false;
    return arrContent.includes(item, len / 2);
  });
  return getPrio(doubles[0]);
});
const total = doubles.reduce((double, sum) => double + sum);

let groups = rucksacks
  .filter((sack, index) => {
    return index % 3 === 0;
  })
  .map((sack, index) => {
    const badges = [...sack].filter(
      (item) =>
        rucksacks[index * 3 + 1].includes(item) &&
        rucksacks[index * 3 + 2].includes(item)
    );
    return getPrio(badges[0]);
    // [sack, rucksacks[index + 3], rucksacks[index + 4]]
  });
const total_2 = groups.reduce((group, sum) => group + sum);

console.log("part 1:", total);
console.log("part 2:", total_2);
// console.log("part 2:", total_2);
