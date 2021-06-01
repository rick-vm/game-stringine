import { Graphics } from '../src/Graphics/Graphics.js';
import OutputFile from './OutputFile.js';
import { vec } from '../src/Graphics/Vec.js';
import { Line } from '../src/Drawable/Shapes/Line.js';
import { Rect } from '../src/Drawable/Shapes/Rect.js';

/*
const dim = 101;
const halfDim = Math.round((dim - 1) / 2);
const step = 1;

const gfx = new Graphics(dim, dim);

const of = new OutputFile('./test/output.txt', { log: false });

console.time('Graphics Test');

const line1 = new Line(vec(-halfDim, halfDim), vec(halfDim, halfDim), '🟥');
const line2 = new Line(vec(halfDim, halfDim), vec(halfDim, -halfDim), '🟥');
const line3 = new Line(vec(halfDim, -halfDim), vec(-halfDim, -halfDim), '🟥');
const line4 = new Line(vec(-halfDim, -halfDim), vec(-halfDim, halfDim), '🟥');
const line5 = new Line(vec(-halfDim, halfDim), vec(halfDim, halfDim), '🟥');
const line6 = new Line(vec(halfDim, halfDim), vec(halfDim, -halfDim), '🟥');
const line7 = new Line(vec(halfDim, -halfDim), vec(-halfDim, -halfDim), '🟥');
const line8 = new Line(vec(-halfDim, -halfDim), vec(-halfDim, halfDim), '🟥');

let i = -halfDim;

setInterval(() => {
	gfx.clearFrame();

	line1.from = vec(i, halfDim); line1.to = vec(halfDim, -i);
	line2.from = vec(halfDim, -i); line2.to = vec(-i, -halfDim);
	line3.from = vec(-i, -halfDim); line3.to = vec(-halfDim, i);
	line4.from = vec(-halfDim, i); line4.to = vec(i, halfDim);

	gfx.draw(line1);
	gfx.draw(line2);
	gfx.draw(line3);
	gfx.draw(line4);

	line5.from = vec(-i, halfDim); line5.to = vec(halfDim, i);
	line6.from = vec(halfDim, i); line6.to = vec(i, -halfDim);
	line7.from = vec(i, -halfDim); line7.to = vec(-halfDim, -i);
	line8.from = vec(-halfDim, -i); line8.to = vec(-i, halfDim);

	gfx.draw(line5);
	gfx.draw(line6);
	gfx.draw(line7);
	gfx.draw(line8);

	i += step;

	of.clearOutput(gfx.render());
}, 100);
*/