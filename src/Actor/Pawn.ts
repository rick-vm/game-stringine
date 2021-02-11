import { Vec } from '../Vec/Vec.js';
import { StringMap } from '../Map/StringMap.js';

export class Pawn {
  private _pos: Vec;
  public readonly map: StringMap;

  constructor(map: StringMap, pos: Vec = Vec.VEC0) {
    this._pos = pos;
    this.map = map;
  }

  get pos(): Vec {
    return this._pos;
  }
}