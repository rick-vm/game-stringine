import { Drawable } from '../Drawable.js';

export abstract class Shape extends Drawable {
	public val: string;

	constructor(val: string) {
		super();
		this.val = val;
	}
}