import { pixel } from '../../../../typings/graphics.js';
import { Vec } from '../../../../Util/Vec.js';
import { Graphics } from '../../../graphics.js';
import { Model } from '../model.js';

export class Line extends Model {
	// private props
	private value: pixel;

	constructor(from: Vec, to: Vec, value: pixel) {
		super([from, to]);

		this.value = value;
	}
	
	// public methods
	public copy(): Model {
		return this;
	}

	public draw(gfx: Graphics): void {
		gfx.drawLine(this.vecs[0]!, this.vecs[1]!, this.value);
	}
}