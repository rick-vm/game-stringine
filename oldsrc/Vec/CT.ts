import { Vec } from './Vec.js';

export class CT {
	public readonly width: number;
	public readonly height: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
	}

	/**
	 * Calculates the index for the vector for a 1d pixel array
	 *
	 * @param vec The vector of which to calculate the index for
	 */
	public index(vec: Vec): number {
		return this.width * vec.y + vec.x;
	}

	/**
	 * Asserts wether the vector is in bounds of the specified width and length
	 *
	 * @param vec
	 */
	public inBounds(vec: Vec): boolean {
		return !(vec.x < 0 || vec.x >= this.width || vec.y < 0 || vec.y >= this.height);
	}
}
