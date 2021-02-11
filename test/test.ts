import { CartesianGrid, vec, Pawn, StringMap } from '../index.js';

const grid = new CartesianGrid(5, 5);

const pawn = new Pawn(new StringMap(1, 1, ['🟪', '🟧', '🟦', '🟩']));
const pawn2 = new Pawn(new StringMap(1, 1, ['🟪', '🟧', '🟦', '🟩']));

grid.drawStringMap(pawn.map, vec(0, 0));
grid.drawStringMap(pawn2.map, vec(1, 1));

console.log(JSON.parse(JSON.stringify(grid))._grid);
console.log(grid.render());
console.log('🟪'.length);