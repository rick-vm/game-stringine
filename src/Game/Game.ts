import { Drawable } from '../Drawable/Drawable.js';
import { Graphics, GraphicsOptions } from '../Graphics/Graphics.js';
import { Vec } from '../Graphics/Vec.js';

class Game extends Graphics {
	constructor(width: number, height: number, { background = '⬛' }: GraphicsOptions = { background: '⬛' }) {
		super(width, height, { background });
	}

	public draw(drawable: Drawable | Drawable[]): void {
		if (drawable instanceof Drawable) {
			drawable.draw(this);
		} else if (drawable instanceof Array) {
			for (const drawableEntry of drawable) drawableEntry.draw(this);
		}
	}
}