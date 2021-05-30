import { Shape } from './Shape.js';
import { Vec } from '../../Graphics/Vec.js';
import { Graphics } from '../../Graphics/Graphics.js';

export class Polygon extends Shape {
	public points: Vec[];

	constructor(points: Vec[], val: string) {
		super(val);
		this.points = points;
	}

	public translate(dPos: Vec): void {
		for (const point of this.points) {
			point.add(dPos);
		}
	}

	public draw(gfx: Graphics): void {
		// add draw algorithm
	}
}