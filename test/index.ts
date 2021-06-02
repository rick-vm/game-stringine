import { Graphics } from '../src/Graphics/Graphics.js';
import { Vec } from '../src/Graphics/Vec.js';
import OutputFile from './OutputFile.js';

const of = new OutputFile('./test/output.txt');

const gfx = new Graphics(25, 25);
gfx.drawLine(new Vec(25, 25), new Vec(0, 0), '🟥');

of.output(gfx.render());