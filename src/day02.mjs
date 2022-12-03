#! /usr/bin/env node
import { readInput } from "./tools.mjs";

/*
A|X for Rock,
B|Y for Paper
C|Z for Scissors

B 2 > A 1 = 3
A 1 > C 3 = 4
C 3 > B 2 = 5

0:lost
3:draw
6:won
*/

const getReaction = (game) => {
  switch (game[1]) {
    case "Z": // win
      switch (game[0]) {
        case "A":
          return "Y";
        case "B":
          return "Z";
        case "C":
        default:
          return "X";
      }
    case "Y": // draw
      return game[0];
    case "X": // loose
      switch (game[0]) {
        case "A":
          return "Z";
        case "B":
          return "X";
        case "C":
        default:
          return "Y";
      }
  }
};

const scoreValues = { A: 1, B: 2, C: 3, X: 1, Y: 2, Z: 3 };

const getPoints = (symbol) => {
  return scoreValues[symbol];
};
const getPoints2 = (game) => {
  return [scoreValues[game[0]], scoreValues[getReaction(game)]];
};

const getScore = (g) => {
  if (g[0] === g[1]) {
    return 3; // draw
  }
  if (
    (g[0] === 1 && g[1] === 3) ||
    (g[0] === 2 && g[1] === 1) ||
    (g[0] === 3 && g[1] === 2)
  ) {
    return 0; // won
  }
  return 6; // lost
};

const input = await readInput("data/day02.txt");

const games = input
  .trim()
  .split("\n")
  .map((score) => score.split(" "));
const points = games.map((game) => game.map((symbol) => getPoints(symbol)));
const points_2 = games.map((game) => getPoints2(game));
const scores = points.map((game) => getScore(game) + game[1]);
const scores_2 = points_2.map((game) => getScore(game) + game[1]);
const total = scores.reduce((score, sum) => score + sum);
const total_2 = scores_2.reduce((score, sum) => score + sum);

console.log(input);
// console.log(games);
// console.log(points);
// console.log(points_2);
console.log(scores);
console.log(scores_2);
console.log(total);
console.log(total_2);
