import { Vec } from './Vec.js';
import { CT } from './CoordTransformer.js';
import { Drawable } from '../Drawable/Drawable.js';

export interface GraphicsOptions {
	background: string
}

export class Graphics extends CT {
	public pixelBuffer: string[];
	public width: number;
	public height: number;
	private readonly _background: string;
	private readonly _bounds: [Vec, Vec];

	constructor(width: number, height: number, { background = '⬛' }: GraphicsOptions = { background: '⬛' }) {
		super(width, height);

		this.pixelBuffer = new Array<string>(width * height).fill(background);
		this._background = background;

		const xR = Math.round((width - 1) / 2);
		const yR = Math.round((height - 1) / 2);
		this._bounds = [new Vec(-xR, yR), new Vec(xR, -yR)];
	}

	public inBounds(loc: Vec): boolean {
		return (loc.x < this._bounds[0].x || loc.x > this._bounds[1].x || loc.y < this._bounds[1].y || loc.y > this._bounds[0].y);
	}

	private index(loc: Vec): number {
		loc = Vec.round(loc);
		return (loc.y * this._width) + loc.x;
	}

	public at(loc: Vec): string | undefined {
		return this.pixelBuffer[this.index(loc)];
	}

	public set(loc: Vec, val: string | undefined): string | undefined {
		if (this.inBounds(loc)) return undefined;

		const i = this.index(loc);
		const old = this.pixelBuffer[i];

		if (val) this.pixelBuffer[i] = val;

		return old;
	}

	public reset(): void {
		this.pixelBuffer = [...this._background];
	}

	public render(): string {
		const lines: string[] = [];

		for (let i = 0; i < this.pixelBuffer.length; i += this._width)
			lines.push(this.pixelBuffer.slice(i, i + this._width).join(''));

		return lines.join('\n');
	}
}