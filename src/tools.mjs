import { promises as fsp } from "fs";

export async function readInput(file) {
    const data = await fsp.readFile(file, {encoding: 'utf-8'});
    return Buffer.from(data).toString();
}
