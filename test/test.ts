import { Graphics } from '../src/Graphics.js';
import OutputFile from './OutputFile.js';
import { vector } from '../src/Vec.js';
import { Line } from '../src/Drawables/Shapes/Line.js';
import { Rect } from '../src/Drawables/Shapes/Rect.js';

const gfx = new Graphics(9, 9);

const of = new OutputFile('./test/output.txt');

const line1 = new Line(vector(-4, 4), vector(4, 4));
const line2 = new Line(vector(4, 4), vector(4, -4));
const line3 = new Line(vector(4, -4), vector(-4, -4));
const line4 = new Line(vector(-4, -4), vector(-4, 4));

gfx.draw(line1, '🟥');
gfx.draw(line2, '🟥');
gfx.draw(line3, '🟥');
gfx.draw(line4, '🟥');

of.output(gfx.render());