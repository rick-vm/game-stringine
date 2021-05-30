import { Vec } from './Vec.js';

export class CartesianCT {
  public readonly width: number;
  public readonly height: number;
  protected readonly _origin: Vec;

  constructor(width: number, height: number) {
  	this.width = width;
  	this.height = height;
  	this._origin = new Vec(Math.round((width - 1) / 2), Math.round((height - 1) / 2));
  }

  /**
   * Transforms from a cartesian coordinate to a pixel plane coordinate 
   *
   * @param vec
   */
  public tf(vec: Vec): Vec {
  	const transformed = Vec.clone(this._origin);
  	transformed.x += vec.x;
  	transformed.y -= vec.y;
  	return transformed;
  }

  /**
   * Transforms the vector from a cartesian coordinate to a pixel plane coordinate and calculates the index for the vector for a 1d pixel array
   *
   * @param vec
   */
  public index(vec: Vec): number {
  	vec = this.tf(vec);
  	return this.width * vec.y + vec.x;
  }

  /**
   * Transforms the vector to cartesian coordinate and asserts wether the vector is in bounds of the specified width and length
   *
   * @param vec
   */
  public inBounds(vec: Vec): boolean {
  	vec = this.tf(vec);
  	return !(vec.x < 0 || vec.x >= this.width || vec.y < 0 || vec.y >= this.height);
  }
}
