import { CartesianGrid, vec, Pawn, StringMap } from '../index.js';

const grid = new CartesianGrid(5, 5);

const pawn = new Pawn(new StringMap(2, 2, ['🟪', '🟩', '🟩', '🟪']));

grid.drawStringMap(pawn.map);

console.log(grid.render());