import { Drawable } from '../Drawable/Drawable.js';
import { Graphics } from '../Graphics/Graphics.js';
import { Vec } from '../Graphics/Vec.js';

class Game {
  public readonly gfx: Graphics;
  
	constructor(gfx: Graphics) {
		this.gfx = gfx;
	}

	public draw(drawable: Drawable | Drawable[]): void {
		if (drawable instanceof Drawable) {
			drawable.draw(gfx);
		} else if (drawable instanceof Array) {
			for (const drawableEntry of drawable) drawableEntry.draw(gfx);
		}
	}
}