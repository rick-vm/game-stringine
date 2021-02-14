import { writeFile } from 'fs';
import { CartesianGrid, vec, Pawn, StringMap } from '../index.js';

const grid = new CartesianGrid(5, 5);

//const pawn = new Pawn(new StringMap(2, 2, ['🟪', '🟧', '🟦', '🟩']));
const pawn2 = new Pawn(new StringMap(4, 1, ['🟪', '🟧', '🟦', '🟩']));

//grid.drawStringMap(pawn.map, vec(0, 0));
grid.drawStringMap(pawn2.map, vec(0, 1));

writeFile('./output.txt', grid.render(), () => { return 'henlo'; });