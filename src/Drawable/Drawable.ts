import { Vec } from '../Graphics/Vec.js';

export class Drawable {
	private readonly _model: Vec[];
	public readonly val: string;
	private _translate: Vec;
	private _scale: Vec;

	constructor(model: Vec[], val: string) {
		this._model = model;
		this.val = val;
		this._translate = new Vec(0, 0);
		this._scale = new Vec(1, 1);
	}

	public translate(dPos: Vec): void {
		this._translate.add(Vec.multiply(dPos, this._scale));
	}

	public scale(dScale: Vec): void {
		this._scale.mul(dScale);
	}

	public transform(): Vec[] {
		const model = [...this._model];

		for (const point of model) {
			point.mul(this._scale).add(this._translate);
		}

		return model;
	}
}