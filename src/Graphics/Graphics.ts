import { Vec } from './Vec.js';
import { CT } from './CoordTransformer.js';
import { Drawable } from '../Drawable/Drawable.js';

export interface GraphicsOptions {
	background: string
}

export class Graphics extends CT {
	private _pixels: string[];
	private readonly _background: string[];

	constructor(width: number, height: number, { background = '⬛' }: GraphicsOptions = { background: '⬛' }) {
		super(width, height);

		this._pixels = new Array<string>(width * height).fill(background);
		this._background = new Array<string>(width * height).fill(background);
	}

	public at(loc: Vec): string | undefined {
		return this._pixels[this.index(loc)];
	}

	public set(loc: Vec, val: string): string | undefined {
		if (this.inBounds(loc)) return undefined;

		const i = this.index(loc);
		const old = this._pixels[i];

		if (val) this._pixels[i] = val;

		return old;
	}

	public render(): string {
		const lines: string[] = [];

		for (let i = 0; i < this._pixels.length; i += this._width)
			lines.push(this._pixels.slice(i, i + this._width).join(''));

		return lines.join('\n');
	}

	public reset(): void {
		this._pixels = [...this._background];
	}

	public draw(drawable: Drawable | Drawable[]): void {
		if (drawable instanceof Drawable) {
			drawable.draw(this);
		} else if (drawable instanceof Array) {
			for (const drawableEntry of drawable) drawableEntry.draw(this);
		}
	}
}