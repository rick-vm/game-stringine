import { Shape } from '../src/Drawable/Shapes/Shape.js';
import { Vec } from '../src/Graphics/Vec.js';
import { Graphics } from '../src/Graphics/Graphics.js';

export class Line extends Shape {
	private _from: Vec;
	private _to: Vec;
	private _dx: number | null = null;
	private _dy: number | null = null;
	private _sx: number | null = null;
	private _sy: number | null = null;
	private _err: number | null = null;

	constructor(from: Vec, to: Vec, val: string) {
		super(val);
		this._from = from;
		this._to = to;
	}

	public translate(dPos: Vec): void {
		this._from.add(dPos);
		this._to.add(dPos);
		this._dx = null;
	}

	get from(): Vec { return this._from; }
	set from(from: Vec) {
		this._from = from;
		this._dx = null;
	}

	get to(): Vec { return this.to; }
	set to(to: Vec) {
		this._to = to;
		this._dx = null;
	}

	public draw(gfx: Graphics): void {
		if (!this._dx || !this._dy || !this._sx || !this._sy || !this._err) {
			this._dx = Math.abs(this._from.x - this._to.x);
			this._dy = Math.abs(this._from.y - this._to.y);
			this._sx = this._from.x < this._to.x ? 1 : -1;
			this._sy = this._from.y < this._to.y ? 1 : -1;
			this._err = this._dx - this._dy;
		}

		const curPos = this._from.clone();
		let err = this._err;

		while (curPos.x !== this._to.x || curPos.y !== this._to.y) {
			gfx.set(curPos, this.val);

			const e2 = err * 2;

			if (e2 > -this._dy) { err -= this._dy; curPos.x += this._sx; }
			if (e2 < this._dx) { err += this._dx; curPos.y += this._sy; }
		}
		gfx.set(curPos, this.val);
	}
}