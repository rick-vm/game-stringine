import { Vec } from '../Vec/Vec.js';
import { CartesianCoordTransformer } from '../Vec/CartesianCoordTransformer.js';

export class StringMap extends CartesianCoordTransformer {
  private readonly _map: (string | undefined)[];

  constructor(width: number, height: number, map: (string | undefined)[]) {
    super(width, height);
    this._map = map;
  }

  public at(vec: Vec): string | undefined {
    return this._map[this.index(vec)];
  }
}