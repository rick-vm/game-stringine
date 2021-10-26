import { Vec } from '../../Util/Vec.js';
import { Graphics } from '../graphics.js';

export abstract class Drawable {
	// public methods
	/** 
	 * The drawing algorithm.
	 * 
	 * @internal
	 * 
	 * @param gfx - The graphics to draw to
	 * @param loc - The location to draw to
	 */
	public abstract draw(gfx: Graphics, loc: Vec): void;
}