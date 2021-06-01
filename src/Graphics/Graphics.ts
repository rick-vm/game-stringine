import { Vec } from './Vec.js';
import { BoundingBox } from '../Box/BoundingBox.js';

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
		loc = Vec.round(loc);
		return (loc.y * this.width) + loc.x;
	}

	private inBounds(loc: Vec): boolean {
		return this._bounds.inBounds(loc);
	}

	public at(loc: Vec): string | undefined {
		return this.pixelBuffer[this.index(loc)];
	}

	public set(loc: Vec, val: string | undefined): void {
		if (this.inBounds(loc)) return undefined;

		if (val) this.pixelBuffer[this.index(loc)] = val;
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
}