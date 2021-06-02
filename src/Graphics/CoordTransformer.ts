import { Vec } from './Vec.js';
import { Graphics } from './Graphics.js';

export interface CoordTransformerOptions {
	origin: Vec
}

export class CoordTransformer {
	private readonly _gfxRef: Graphics;
	private readonly _origin: Vec;

	constructor(
		gfx: Graphics,
		{ origin = new Vec((gfx.width - 1) / 2, (gfx.height - 1) / 2) }: CoordTransformerOptions = { origin: new Vec((gfx.width - 1) / 2, (gfx.height - 1) / 2) }
	) {
		this._gfxRef = gfx;
		this._origin = origin;
	}

	private transform(loc: Vec): Vec {
		return new Vec(this._origin.x + loc.x, this._origin.y - loc.y);
	}

	// public draw(drawable: Drawable | Drawable[]): void {
	// 	if (drawable instanceof Drawable) {
	// 		drawable.draw(this.gfx);
	// 	} else if (drawable instanceof Array) {
	// 		for (const drawableEntry of drawable) drawableEntry.draw(this.gfx);
	// 	}
	// }
}