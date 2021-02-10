import { Vec } from './Vec.js';

export class CoordTransformer {
  public readonly width: number;
  public readonly height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  /**
   * Calculates the index for the vector for a 1d pixel array
   */
  public index(vec: Vec): number {
    return this.width * vec.y + vec.x;
  }

  /**
   * Asserts wether the vector is in bounds of the specified width and length
   */
  public inbounds(vec: Vec): boolean {
    return !(vec.x < 0 || vec.x >= this.width || vec.y < 0 || vec.y >= this.height);
  }
}
