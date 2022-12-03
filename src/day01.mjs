#! /usr/bin/env node
import {readInput} from "./tools.mjs";

const input = await readInput("data/day01.txt");

const elves = input.split(/\n\n/).map((elve)=>elve.split(/\n/).map((calories=>parseInt(calories))));
const caloriesElve = elves.map((elve)=>elve.reduce((calories,sum)=>sum+calories)).sort((a,b)=>b-a);
console.log('calories per elve', caloriesElve);

const best = caloriesElve[0];
console.log('best:',best);

const sumBestThree = caloriesElve[0]+caloriesElve[1]+caloriesElve[2];
console.log('sum best three', sumBestThree);

