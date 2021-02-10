import { Vec } from '../Vec/Vec.js';
import { StringMap } from '../Map/StringMap.js';

export class Pawn {
  public pos: Vec;
  public readonly map: StringMap;

  constructor(map: StringMap, pos: Vec = Vec.VEC0) {
    this.pos = pos;
    this.map = map;
  }
}