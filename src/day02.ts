import { readInput } from "./tools.mjs";

/*
0:lost
3:draw
6:won
*/

type Game = [string, string];

const scoreValues = {
  A: 1, // Rock
  B: 2, // Paper
  C: 3, // Scissors
  X: 1, // Rock
  Y: 2, // Paper
  Z: 3, // Scissors
};

const getReaction = (game: Game): string => {
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

const getPoints = (symbol): number => {
  return scoreValues[symbol];
};
const getPointsForGame = (game): [number, number] => {
  return [getPoints([game[0]]), getPoints(getReaction(game))];
};

const getScore = (g): 0 | 3 | 6 => {
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

const input: string = await readInput("src/data/day02.txt");

const games = input
  .trim()
  .split("\n")
  .map((score) => score.split(" "));
const points = games.map((game) => game.map((symbol) => getPoints(symbol)));
const points_2 = games.map((game) => getPointsForGame(game));
const scores = points.map((game) => getScore(game) + game[1]);
const scores_2 = points_2.map((game) => getScore(game) + game[1]);
const total = scores.reduce((score, sum) => score + sum);
const total_2 = scores_2.reduce((score, sum) => score + sum);

// console.log(input);
// console.log(games);
// console.log(points);
// console.log(points_2);
// console.log(scores);
// console.log(scores_2);
console.log("part 1:", total);
console.log("part 2:", total_2);
