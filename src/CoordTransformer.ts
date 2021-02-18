import { Vec } from './Vec.js';

export interface CTOptions {
  origin: Vec
}

export interface TransformOptions {
  x: number,
  y: number
}

export class CT {
  protected readonly _width: number;
  protected readonly _height: number;
  private readonly _max_index: number;
  private readonly _origin_index: number;
  private readonly _origin: Vec;

  constructor(
    width: number,
    height: number, 
    { origin = new Vec(width / 2, height / 2) }: CTOptions = { origin: new Vec(width / 2, height / 2) }
  ) {
    this._width = width;
    this._height = height;
    this._max_index = width * height - 1;
    this._origin = Vec.round(origin);
    this._origin_index = this._origin.y * this._width + this._origin.x;
  }

  public index(vec: Vec): number {
    vec = Vec.round(vec);
    return this._origin_index - (vec.y * this._width) + vec.x;
  }

  public tf(vec: Vec): Vec {
    return new Vec(this._origin.x + vec.x, this._origin.y - vec.y);
  }

  public inBounds(vec: Vec): boolean {
    const i = this._origin_index - (vec.y * this._width) + vec.x;
    return i >= 0 && i <= this._max_index;
  }
}