import { Vec } from '../Vec/Vec.js';

export class CoordTransformer {
  protected readonly _width: number;
  protected readonly _height: number;
  protected readonly _center: Vec;

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

  /**
   * Asserts wether the vector is in bounds of the specified width and length
   */
  public inbounds(vec: Vec): boolean {
    return vec.x >= 0 || vec.x < this._width || vec.y >= 0 || vec.y < this._height;
  }

  /**
   * Transforms the vector to cartesian coordinate plane and asserts wether the vector is in bounds of the specified width and length
   */
  public inbounds_tf(vec: Vec): boolean {
    const transformed = this.tf(vec);
    return transformed.x >= 0 || transformed.x < this._width || transformed.y >= 0 || transformed.y < this._height;
  }
}

export class CartesianGrid extends CoordTransformer {
  private readonly _background: string;
  private readonly _grid: string[];

  constructor(width: number, height: number, background: string) {
    super(width, height);
    this._background = background;
    this._grid = new Array<string>(width * height);
    this._grid.fill(background);
  }

  public at(vec: Vec): string {
    return this._grid[this.index_tf(vec)] || '';
  }

  public set(vec: Vec, value: string): string {
    if (this.inbounds_tf(vec)) {
      const val = this._grid[this.index_tf(vec)]!;
      this._grid[this.index_tf(vec)] = value;
      return val;
    } else {
      return '';
    }
  }

  public reset(): string[] {
    const prevFrame = this._grid;
    this._grid.fill(this._background);
    return prevFrame;
  }

  public fill(val = this._background): string[] {
    const prevFrame = this._grid;
    this._grid.fill(val);
    return prevFrame;
  }

  public render(): string {
    const rows: string[] = [];
    for (let i = 0; i < (this._grid.length - this._width); i += this._width) rows.push(this._grid.slice(i, i + this._width).join(''));
    return rows.join('\n');
  }
}

export class Grid extends CoordTransformer {
  private readonly _background: string;
  private readonly _grid: string[];

  constructor(width: number, height: number, background: string) {
    super(width, height);
    this._background = background;
    this._grid = new Array<string>(width * height);
    this._grid.fill(background);
  }

  public at(vec: Vec): string {
    return this._grid[this.index(vec)] || '';
  }

  public set(vec: Vec, value: string): string {
    if (this.inbounds_tf(vec)) {
      const val = this._grid[this.index(vec)]!;
      this._grid[this.index(vec)] = value;
      return val;
    } else {
      return '';
    }
  }

  public reset(): string[] {
    const prevFrame = this._grid;
    this._grid.fill(this._background);
    return prevFrame;
  }

  public fill(val = this._background): string[] {
    const prevFrame = this._grid;
    this._grid.fill(val);
    return prevFrame;
  }

  public render(): string {
    const rows: string[] = [];
    for (let i = 0; i < (this._grid.length - this._width); i += this._width) rows.push(this._grid.slice(i, i + this._width).join(''));
    return rows.join('\n');
  }
}