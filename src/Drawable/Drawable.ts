import { Graphics } from '../Graphics/Graphics.js';

export abstract class Drawable {
	public abstract draw(gfx: Graphics): void;
}