import { Vec } from '../Graphics/Vec.js';

export class BoundingBox {
	public readonly topLeft: Vec;
	public readonly bottomRight: Vec;

	constructor(left: number, top: number, right: number, bottom: number) {
		this.topLeft = new Vec(left, top);
		this.bottomRight = new Vec(right, bottom);
	}
}