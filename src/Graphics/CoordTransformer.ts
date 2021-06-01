import { Vec } from './Vec.js';

export interface CTOptions {
	origin: Vec
}

export class CT {
	protected readonly _width: number;
	protected readonly _height: number;
	private readonly _topLeft: Vec;
	private readonly _bottomRight: Vec;
	private readonly _origin_index: number;
	private readonly _origin: Vec;

	constructor(
		width: number,
		height: number,
		{ origin = new Vec((width - 1) / 2, (height - 1) / 2) }: CTOptions = { origin: new Vec((width - 1) / 2, (height - 1) / 2) }
	) {
		this._width = width;
		this._height = height;
		const xR = Math.round((width - 1) / 2);
		const yR = Math.round((height - 1) / 2);
		this._topLeft = new Vec(-xR, yR);
		this._bottomRight = new Vec(xR, -yR);
		this._origin = Vec.round(origin);
		this._origin_index = this._origin.y * this._width + this._origin.x;
	}

	public transform(loc: Vec): Vec {
		return new Vec(this._origin.x + loc.x, this._origin.y - loc.y);
	}
}