import { Vec } from './Vec.js';
import { Graphics } from './Graphics.js';

export interface CoordTransformerOptions {
	origin: Vec
}

export class CoordTransformer {
	private readonly _gfx: Graphics;
	private readonly _origin: Vec;

	constructor(
		gfx: Graphics
	) {
		this._gfx = gfx;
		this._origin = new Vec((gfx.width - 1) / 2, (gfx.height - 1) / 2);
	}
}