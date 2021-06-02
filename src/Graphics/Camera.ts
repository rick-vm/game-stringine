import { CoordTransformer } from './CoordTransformer.js';
import { Vec } from './Vec.js';

export class Camera {
	private readonly _ct: CoordTransformer;
	private _pos: Vec;
	private _scale: number;

	constructor(ct: CoordTransformer, pos = new Vec(0, 0), scale = 1) {
		this._ct = ct;
		this._pos = pos;
		this._scale = scale;
	}
}