import { Graphics } from '../src/Graphics.js';
import OutputFile from './OutputFile.js';
import { vector } from '../src/Vec.js';

const gfx = new Graphics(4, 4);

const of = new OutputFile('./test/output.txt');

gfx.set(vector(0, 0), '🟥');

of.output(gfx.render());