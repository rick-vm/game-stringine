import { Shape } from './Shape.js';
import { Vec } from '../../Graphics/Vec.js';
import { Graphics } from '../../Graphics/Graphics.js';

export class Polygon extends Shape {
	public points: Vec[];

	constructor(points: Vec[], val: string) {
		super(val);
		this.points = points;
	}

	public draw(gfx: Graphics): void {
		// add draw algorithm
	}
}