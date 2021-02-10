import { Vec } from './Vec.js';

export class CartesianCoordTransformer {
  public readonly width: number;
  public readonly height: number;
  protected readonly _center: Vec;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this._center = new Vec(Math.round((width - 1) / 2), Math.round((height - 1) / 2));
  }

  /**
   * Transforms from a cartesian coordinate to a pixel plane coordinate 
   */
  public tf(vec: Vec): Vec {
    const transformed = Vec.clone(this._center);
    transformed.x += vec.x;
    transformed.y -= vec.y;
    return transformed;
  }

  /**
   * Transforms the vector from a cartesian coordinate to a pixel plane coordinate and calculates the index for the vector for a 1d pixel array
   */
  public index(vec: Vec): number {
    const transformed = this.tf(vec);
    return this.width * transformed.y + transformed.x;
  }

  /**
   * Transforms the vector to cartesian coordinate and asserts wether the vector is in bounds of the specified width and length
   */
  public inbounds(vec: Vec): boolean {
    vec = this.tf(vec);
    return !(vec.x < 0 || vec.x >= this.width || vec.y < 0 || vec.y >= this.height);
  }
}
