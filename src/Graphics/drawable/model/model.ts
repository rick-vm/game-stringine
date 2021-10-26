import { Vec } from '../../../Util/Vec.js';
import { Drawable } from '../drawable.js';

export abstract class Model extends Drawable {
	// private props
	/**
	 * The scale of this model.
	 * 
	 * @internal
	 */
	private _scale: Vec = new Vec();
	/**
	 * The translation of this model
	 * 
	 * @internal
	 */
	private translation: Vec = new Vec();

	// protected props
	/**
	 * The vectors of this model.
	 */
	protected readonly vecs: Vec[];

	constructor(vecs: Vec[]) {
		super();
	
		this.vecs = vecs;
	}

	// public methods
	public abstract copy(): Model;

	/**
	 * Adjusts the scaling.
	 * 
	 * @internal
	 * 
	 * @param scale - The scaling factor
	 */
	public scale(scale: Vec): void {
		this._scale.mul(scale);
		this.translation.mul(this._scale);
	}

	/**
	 * Adjusts the translation.
	 * 
	 * @internal
	 * 
	 * @param dPos - The position to translate by
	 */
	public translate(dPos: Vec): void {
		this.translation.add(dPos);
	}

	/**
	 * Transforms the vectors according to the scale and translation.
	 * 
	 * @internal
	 */
	public transformVecs(): void {
		for (let i = 0; i < this.vecs.length; i++) {
			this.vecs[i] = this.vecs[i]!
				.mul(this._scale)
				.add(this.translation);
		}
	}
}
