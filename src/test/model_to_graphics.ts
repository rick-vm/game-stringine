import { Line } from '../graphics/drawable/model/models/line.js';
import { Graphics } from '../graphics/graphics.js';
import { Vec } from '../Util/Vec.js';

const line = new Line(new Vec(), new Vec(), '🟥');

const gfx = new Graphics({
	width: 10,
	height: 10,
	background: '⬛'
});

gfx.drawModel(line, new Vec());

console.log(gfx.render());
