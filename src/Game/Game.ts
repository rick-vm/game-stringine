import { CoordTransformer } from '../Graphics/CoordTransformer.js';
import { Graphics } from '../Graphics/Graphics.js';
import { Vec } from '../Graphics/Vec.js';

export class Game {
	public readonly gfx: Graphics;
	private readonly _ct: CoordTransformer;

	constructor(gfx: Graphics) {
		this.gfx = gfx;
		this._ct = new CoordTransformer(gfx);
	}
}