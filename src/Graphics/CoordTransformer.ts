import { Vec } from './Vec.js';

export interface CoordTransformerOptions {
	origin: Vec
}

export class CoordTransformer {
	protected readonly _width: number;
	protected readonly _height: number;
	private readonly _origin: Vec;

	constructor(
		width: number,
		height: number,
		{ origin = new Vec((width - 1) / 2, (height - 1) / 2) }: CoordTransformerOptions = { origin: new Vec((width - 1) / 2, (height - 1) / 2) }
	) {
		this._width = width;
		this._height = height;
		this._origin = origin;
	}

	public transform(loc: Vec): Vec {
		return new Vec(this._origin.x + loc.x, this._origin.y - loc.y);
	}
}