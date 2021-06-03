import { Vec } from './Vec.js';
import { BoundingBox } from '../BoundingBox/BoundingBox.js';
import errors from '../errors/errors.js';

export interface GraphicsOptions {
	background: string
}

export class Graphics {
	public pixelBuffer: string[];
	public readonly width: number;
	public readonly height: number;
	public readonly background: string;
	private readonly _bounds: BoundingBox;

	constructor(width: number, height: number, { background = '⬛' }: GraphicsOptions = { background: '⬛' }) {
		this.pixelBuffer = new Array<string>(width * height).fill(background);
		this.width = width;
		this.height = height;
		this.background = background;
		this._bounds = new BoundingBox(0, 0, width - 1, height - 1);
	}

	private index(loc: Vec): number {
		return (loc.y * this.width) + loc.x;
	}

	private indexIndependent(x: number, y: number): number {
		return (y * this.width) + x;
	}

	private inBounds(loc: Vec): boolean {
		return this._bounds.inBounds(loc);
	}

	private inBoundsIndependent(x: number, y: number): boolean {
		return this._bounds.inBoundsIndependent(x, y);
	}

	public at(loc: Vec): string | undefined {
		return this.pixelBuffer[this.index(loc)];
	}

	public set(loc: Vec, val: string | undefined): void {
		loc = Vec.round(loc);
		if (!this.inBounds(loc)) return;

		if (val) this.pixelBuffer[this.index(loc)] = val;
	}

	private setIndependent(x: number, y: number, val: string | undefined): void {
		x = Math.round(x);
		y = Math.round(y);
		if (!this.inBoundsIndependent(x, y)) return;

		if (val) this.pixelBuffer[this.indexIndependent(x, y)] = val;
	}

	public clearBuffer(): void {
		this.pixelBuffer.fill(this.background);
	}

	public render(): string {
		let frame = '';

		for (let i = 0; i < this.pixelBuffer.length; i += this.width)
			frame += this.pixelBuffer.slice(i, i + this.width).join('') + '\n';

		return frame;
	}

	public drawLine(from: Vec, to: Vec, val: string): void {
		from = Vec.round(from);
		to = Vec.round(to);

		const
			dx = Math.abs(to.x - from.x),
			dy = Math.abs(to.y - from.y),
			sx = from.x < to.x ? 1 : -1,
			sy = from.y < to.y ? 1 : -1;
		let err = dx - dy;

		const cur = from.clone();
		console.log(from, to, dx, dy, sx, sy, err);

		while (cur.x !== to.x || cur.y !== to.y) {
			console.log(cur.x, cur.y, cur.x !== to.x || cur.y !== to.y);
			this.set(cur, val);

			// Bit shift for ultimate performance (same as err * 2)
			const e2 = err >> 1;

			if (e2 > -dy) { err -= dy; cur.x += sx; }
			if (e2 < dx) { err += dx; cur.y += sy; }
		}

		// Solve last pixel and edge case
		this.set(cur, val);
	}

	public drawRect(from: Vec, to: Vec, val: string): void {
		if (from.x > to.x) Vec.swapx(from, to);
		if (from.y > to.y) Vec.swapy(from, to);

		for (let i = from.x; i <= to.x; i++) {
			this.setIndependent(i, from.y, val);
			this.setIndependent(i, to.y, val);
		}
		for (let i = from.y + 1; i !== to.y; i++) {
			this.setIndependent(from.x, i, val);
			this.setIndependent(to.x, i, val);
		}
	}

	public drawFilledRect(from: Vec, to: Vec, val: string): void {
		if (from.x > to.x) Vec.swapx(from, to);
		if (from.y > to.y) Vec.swapy(from, to);

		const curPos = from.clone();

		for (; curPos.y <= to.y; curPos.y++) {
			for (curPos.x = from.x; curPos.x <= to.x; curPos.x++) {
				this.set(curPos, val);
			}
		}
	}

	public drawClosedPoly(model: Vec[], val: string): void {
		if (model.length < 2) throw errors.invalidArrayLength;

		for (let i = 1; i < model.length; i++) {
			console.log(i);
			this.drawLine(model[i - 1]!, model[i]!, val);
		}

		if (model.length !== 2) this.drawLine(model[0]!, model[model.length - 1]!, val);
	}

	public drawOpenPoly(model: Vec[], val: string): void {
		if (model.length < 2) throw errors.invalidArrayLength;

		for (let i = 1; i < model.length; i++) {
			this.drawLine(model[i - 1]!, model[i]!, val);
		}
	}

	public drawFilledPoly(model: Vec[], val: string): void {
		// create drawing algo
	}

	public drawCircle(radius: number, val: string): void {
		// create drawing algo
	}

	public drawTriangle(vertex1: Vec, vertex2: Vec, vertex3: Vec, val: string): void {
		// create drawing algo
	}

	public drawFilledTriangle(vertex1: Vec, vertex2: Vec, vertex3: Vec, val: string): void {
		// create drawing algo
	}
}