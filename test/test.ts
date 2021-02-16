import { writeFile } from 'fs';
import { CartesianGrid, vec, Pawn, StringMap } from '../index.js';

const grid = new CartesianGrid(5, 5);

const pawn = new Pawn(new StringMap(4, 1, ['🟪', '🟧', '🟦', '🟩']));
const pawn2 = new Pawn(new StringMap(2, 2, ['🟪', '🟧', '🟦', '🟩']));

grid.drawStringMap(pawn.map, vec(-1, 1));
grid.drawStringMap(pawn2.map, vec(0, -1));

writeFile('./test/output.txt', grid.render(), () => '');

console.log('\x1b[1m===============================================\n', '\x1b[0m');
console.log('\x1b[1mOutput: \x1b[36mtest/output.txt\n', '\x1b[0m');
console.log('\x1b[1mOutputted from: \x1b[36mtest/test.ts\n', '\x1b[0m');
console.log('\x1b[1m===============================================\n', '\x1b[0m');