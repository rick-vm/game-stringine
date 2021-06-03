import { Vec } from '../../Graphics/Vec.js';

export abstract class Shape {
	public readonly model: Vec[];
	public readonly val: string;
	public pos: Vec;

	constructor(model: Vec[], val: string, pos = new Vec(0, 0)) {
		this.model = model;
		this.val = val;
		this.pos = pos;
	}
}