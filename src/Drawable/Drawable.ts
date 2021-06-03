import { Vec } from '../Graphics/Vec.js';
import { Shape } from './Shape/Shape.js';

export class Drawable {
	private readonly _shape: Shape;
	private _translate: Vec;
	private _scale: Vec;

	constructor(shape: Shape) {
		this._shape = shape;
		this._translate = new Vec(0, 0);
		this._scale = new Vec(1, 1);
	}

	public translate(dPos: Vec): void {
		this._translate.add(Vec.multiply(dPos, this._scale));
	}

	public scale(dScale: Vec): void {
		this._scale.mul(dScale);
	}

	public transform(): { model: Vec[], val: string } {
		const model = [...this._shape.model];

		for (const point of model) {
			point.mul(this._scale).add(this._translate);
		}

		return { model, val: this._shape.val };
	}
}