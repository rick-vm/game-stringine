import { Vec } from '../Graphics/Vec.js';

export class BoundingBox {
	public left: number;
	public top: number;
	public right: number;
	public bottom: number;

	constructor(left: number, top: number, right: number, bottom: number) {
		this.left = left;
		this.top = top;
		this.right = right;
		this.bottom = bottom;
	}

	public inBounds(loc: Vec): boolean {
		return loc.x >= this.left && loc.x <= this.right && loc.y >= this.top && loc.y <= this.bottom;
	}

	public inBoundsIndependent(x: number, y: number): boolean {
		return x >= this.left && x <= this.right && y >= this.top && y <= this.bottom;
	}
}