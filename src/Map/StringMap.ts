import { Vec } from '../Vec/Vec.js';
import { TLCartesianCT } from '../Vec/TLCartesianCT.js';

export class StringMap extends TLCartesianCT {
  private readonly _map: (string | undefined)[];

  constructor(width: number, height: number, map: (string | undefined)[]) {
    super(width, height);
    this._map = map;
  }

  public at(vec: Vec): string | undefined {
    return this._map[this.index(vec)];
  }
}