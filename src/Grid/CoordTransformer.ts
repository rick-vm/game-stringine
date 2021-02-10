import { Vec } from '../Vec/Vec.js';

export class CoordTransformer {
  protected readonly _width: number;
  protected readonly _height: number;
  protected readonly _center: Vec;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
    this._center = new Vec(width / 2, height / 2);
  }

  /**
   * Transforms from a cartesian plane coordinate to a pixel plane coordinate 
   */
  public tf(vec: Vec): Vec {
    const transformed = Vec.clone(this._center);
    transformed.x += vec.x;
    transformed.y -= vec.y;
    return transformed;
  }

  /**
   * Transforms from a cartesian plane coordinate to a pixel plane coordinate and calculates the index for the vector for a 1d pixel array
   */
  public index_tf(vec: Vec): number {
    const transformed = this.tf(vec);
    return Math.round(this._width * transformed.y + transformed.x);
  }

  /**
   * Calculates the index for the vector for a 1d pixel array
   */
  public index(vec: Vec): number {
    return Math.round(this._width * vec.y + vec.x);
  }

  /**
   * Asserts wether the vector is in bounds of the specified width and length
   */
  public inbounds(vec: Vec): boolean {
    return !(vec.x < 0 || vec.x >= this._width || vec.y < 0 || vec.y >= this._height);
  }

  /**
   * Transforms the vector to cartesian coordinate plane and asserts wether the vector is in bounds of the specified width and length
   */
  public inbounds_tf(vec: Vec): boolean {
    const transformed = this.tf(vec);
    return !(transformed.x < 0 || transformed.x >= this._width || transformed.y < 0 || transformed.y >= this._height);
  }
}
