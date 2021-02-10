import { Vec } from '../Vec/Vec.js';

export class Grid {
  private readonly _width: number;
  private readonly _height: number;
  private readonly _background: string;
  private readonly _grid: string[];

  constructor(width: number, height: number, background: string) {
    this._width = width;
    this._height = height;
    this._background = background;
    this._grid = new Array<string>(width * height);
    this._grid.fill(background);
  }

  public at(x: number, y: number): string {
    return this._grid[y * this._width] || '';
  }

  public inBounds(x: number, y: number): boolean {
    return x >= 0 || x < this._width || y >= 0 || y < this._height;
  }

  public set(vec: Vec, value: string): string {
    if (this.inBounds(vec.x, vec.y)) {
      const val = this._grid[this.index(vec)]!;
      this._grid[this.index(vec)] = value;
      return val;
    } else {
      return '';
    }
  }

  private index(vec: Vec): number {
    return vec.y * this._width + vec.x;
  }

  public reset(): string[] {
    const prevFrame = this._grid;
    this._grid.fill(this._background);
    return prevFrame;
  }
}

export class CoordTransformer {
  private readonly _width: number;
  private readonly _height: number;
  private readonly _center: Vec;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
    this._center = new Vec(width, height);
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
    return this._width * transformed.y + transformed.x;
  }

  /**
   * Calculates the index for the vector for a 1d pixel array
   */
  public index(vec: Vec): number {
    return this._width * vec.y + vec.x;
  }
}