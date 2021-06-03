import { Vec } from '../Graphics/Vec.js';
import { Shape } from './Shape/Shape.js';

export class Drawable {
	private readonly _model: Vec[];
	private readonly _val: string;
	private _translate: Vec;
	private _scale: Vec;

	constructor(shape: Shape) {
		this._model = shape.model;
		this._val = shape.val;
		this._translate = shape.pos.clone();
		this._scale = new Vec(1, 1);
	}

	public translate(dPos: Vec): void {
		this._translate.add(Vec.multiply(dPos, this._scale));
	}

	public scale(dScale: Vec): void {
		this._scale.mul(dScale);
	}

	public transform(): { model: Vec[], val: string } {
		const model = [...this._model];

		for (const vertex of model) {
			vertex.mul(this._scale).add(this._translate);
		}

		return { model, val: this._val };
	}
}