import { Vec } from '../Vec/Vec.js';
import { CoordTransformer } from '../Vec/CoordTransformer.js';

export class StringMap extends CoordTransformer {
  private readonly _map: (string | undefined)[];

  constructor(width: number, height: number, map: (string | undefined)[]) {
    super(width, height);
    this._map = map;
  }

  public at(vec: Vec): string | undefined {
    return this._map[this.index(vec)];
  }
}