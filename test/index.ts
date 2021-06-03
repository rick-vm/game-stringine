import { Graphics } from '../src/Graphics/Graphics.js';
import { Vec } from '../src/Graphics/Vec.js';
import OutputFile from './OutputFile.js';

const of = new OutputFile('./test/output.txt');

const gfx = new Graphics(25, 25);

console.time();

//for (let i = 0; i < 10; i++) {
gfx.drawLine(new Vec(0, 0), new Vec(5, 10), '🟥');

of.output(gfx.render());
//gfx.drawClosedPoly([Vec.randomPositive(24), Vec.randomPositive(24), Vec.randomPositive(24)], '🟥');
//}

console.timeEnd();