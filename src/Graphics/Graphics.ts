import { GraphicsOptions, pixel } from '../typings/graphics.js';
import { Vec } from '../Util/Vec.js';
import { Model } from './drawable/model/model.js';

export class Graphics {
	// public props
	public readonly width: number;
	public readonly height: number;
	
	// private props
	private readonly _background: pixel;
	private readonly _frame: pixel[];
	private readonly _depth: number[];

	constructor(options: GraphicsOptions) {
		this.width = options.width;
		this.height = options.height;
		this._background = options.background;
		this._frame = new Array(options.width * options.height);
		this._depth = new Array(options.width * options.height);
		this.newFrame();
	}

	// public methods
	/**
	 * Sets a pixel and does a boundary and depth check.
	 *
	 * @param loc - The location of the pixel
	 * @param val - The pixel value to set
	 */
	public setPixel(loc: Vec, val: pixel): void {
		const index = this.indexOf(loc);

		// Check boundaries and depth
		if (
			!this.inBounds(loc)
			|| loc.z < this._depth[index]!
		) return;

		this._frame[index] = val;
	}

	/**
	 * Same as setPixel() but doesn't do depth checking.
	 * 
	 * @param loc - The location of the pixel
	 * @param val - The pixel value to set
	 */
	public setPixelIgnoreDepth(loc: Vec, val: pixel): void {
		// Check boundaries
		if (!this.inBounds(loc)) return;

		this._frame[this.indexOf(loc)] = val;
	}

	/**
	 * - Micro optimization
	 * 
	 * Same as setPixel() but doesn't do boundary checking.
	 * 
	 * CAUTION: Will cause frame buffer overflow if loc is outside of boundaries.
	 * 
	 * @param loc - The location of the pixel
	 * @param val - The pixel value to set
	 */
	public setPixelIgnoreBounds(loc: Vec, val: pixel): void {
		const index = loc.y * this.width + loc.x;

		// Check depth
		if (loc.z < this._depth[index]!) return;

		this._frame[index] = val;
	}

	/**
	 * - Micro optimization
	 * 
	 * Same as setPixel() but doesn't do boundary nor depth checking.
	 * 
	 * CAUTION: Will cause frame buffer overflow if loc is outside of boundaries.
	 * 
	 * @param loc - The location of the pixel
	 * @param val - The pixel value to set
	 */
	public setPixelIgnoreAll(loc: Vec, val: pixel): void {
		const index = loc.y * this.width + loc.x;

		// Check depth
		if (loc.z < this._depth[index]!) return;

		this._frame[index] = val;
	}

	/**
	 * Draws a line. Starting position and ending position do not need to be sorted.
	 * 
	 * @internal
	 * 
	 * @param from - The starting location
	 * @param to - The ending location
	 */
	public drawLine(from: Vec, to: Vec, value: pixel): void {
		const dx = to.x - from.x;
		const dy = to.y - from.y;
		let d = 2 * dy - dx;

		for (const cursor = from.copy(); cursor.x < to.x; cursor.x++) {
			this.setPixel(cursor, value);

			if (d > 0) {
				cursor.y++;
				d = d - 2 * dx;
			}

			d = d + 2 * dy;
		}
	}

	/**
	 * Draws a `Model` to a location.
	 * 
	 * @param model - The model to draw
	 * @param loc - The location to draw to
	 */
	public drawModel(model: Model, loc: Vec): void {
		model.transformVecs();
		model.draw(this, loc);
	}

	/**
	 * Outputs the current frame.
	 * 
	 * @returns The rendered string
	 */
	public render(): string {
		let render = '';

		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) render += this._frame[y * this.width + x];
			render += '\n';
		}

		return render;
	}

	/**
	 * Ends the frame currently being drawn and starts a new frame.
	 */
	public newFrame(): void {
		this._frame.fill(this._background);
		this._depth.fill(-Infinity);
	}

	// private methods
	/**
	 * Checks if a location is in bounds of the frame buffer.
	 * 
	 * @param loc - The location to bound check
	 * @returns A boolean value where `true` means it's in bounds and `false` means it's outside bounds
	 */
	private inBounds(loc: Vec): boolean {
		return loc.x >= 0 && loc.x < this.width && loc.y >= 0 && this.height > loc.y;
	}

	/**
	 * Converts a location to an index in the frame buffer.
	 * 
	 * @param loc - The location to convert
	 * @returns The index of the vector
	 */
	private indexOf(loc: Vec): number {
		return Math.round(loc.y) * this.width + Math.round(loc.x);
	}
}