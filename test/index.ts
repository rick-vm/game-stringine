import { Graphics } from '../src/Graphics.js';
import OutputFile from './OutputFile.js';
import { vector } from '../src/Vec.js';
import { Line } from '../src/Draw/Shapes/Line.js';
import { Rect } from '../src/Draw/Shapes/Rect.js';

const dim = 101;
const halfDim = Math.round((dim - 1) / 2);
const step = 1;

const gfx = new Graphics(dim, dim);

const of = new OutputFile('./test/output.txt', { log: false });

console.time('Graphics Test');

const line1 = new Line(vector(-halfDim, halfDim), vector(halfDim, halfDim));
const line2 = new Line(vector(halfDim, halfDim), vector(halfDim, -halfDim));
const line3 = new Line(vector(halfDim, -halfDim), vector(-halfDim, -halfDim));
const line4 = new Line(vector(-halfDim, -halfDim), vector(-halfDim, halfDim));

// THIS IS FOR THE SECOND SQUARE
const line5 = new Line(vector(-halfDim, halfDim), vector(halfDim, halfDim));
const line6 = new Line(vector(halfDim, halfDim), vector(halfDim, -halfDim));
const line7 = new Line(vector(halfDim, -halfDim), vector(-halfDim, -halfDim));
const line8 = new Line(vector(-halfDim, -halfDim), vector(-halfDim, halfDim));

let i = -halfDim;

setInterval(() => {
  gfx.reset();

  line1.from = vector(i, halfDim); line1.to = vector(halfDim, -i);
  line2.from = vector(halfDim, -i); line2.to = vector(-i, -halfDim);
  line3.from = vector(-i, -halfDim); line3.to = vector(-halfDim, i);
  line4.from = vector(-halfDim, i); line4.to = vector(i, halfDim);

  gfx.draw(line1, '🟥');
  gfx.draw(line2, '🟥');
  gfx.draw(line3, '🟥');
  gfx.draw(line4, '🟥');

  // THIS IS FOR THE SECOND SQUARE
  line5.from = vector(-i, halfDim); line5.to = vector(halfDim, i);
  line6.from = vector(halfDim, i); line6.to = vector(i, -halfDim);
  line7.from = vector(i, -halfDim); line7.to = vector(-halfDim, -i);
  line8.from = vector(-halfDim, -i); line8.to = vector(-i, halfDim);

  gfx.draw(line5, '🟥');
  gfx.draw(line6, '🟥');
  gfx.draw(line7, '🟥');
  gfx.draw(line8, '🟥');

  i += step;

  of.clearOutput(gfx.render());
}, 100);