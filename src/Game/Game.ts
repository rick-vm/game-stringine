import { Drawable } from '../Drawable/Drawable.js';
import { CoordTransformer } from '../Graphics/CoordTransformer.js';
import { Graphics } from '../Graphics/Graphics.js';
import { Vec } from '../Graphics/Vec.js';

export class Game {
	public readonly gfx: Graphics;
	private readonly _ct: CoordTransformer;

	constructor(gfx: Graphics) {
		this.gfx = gfx;
		this._ct = new CoordTransformer(gfx.width, gfx.height);
	}

	public draw(drawable: Drawable | Drawable[]): void {
		if (drawable instanceof Drawable) {
			drawable.draw(this.gfx);
		} else if (drawable instanceof Array) {
			for (const drawableEntry of drawable) drawableEntry.draw(this.gfx);
		}
	}
}