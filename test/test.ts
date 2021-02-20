import { Graphics } from '../src/Graphics.js';
import OutputFile from './OutputFile.js';
import { vector } from '../src/Vec.js';
import { Line } from '../src/Drawables/Shapes/Line.js';

const gfx = new Graphics(13, 13);

const of = new OutputFile('./test/output.txt');

gfx.drawShape(new Line(vector(0, 0), vector(5, 3)), '🟥');

of.output(gfx.render());