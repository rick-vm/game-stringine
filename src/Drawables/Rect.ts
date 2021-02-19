import { Drawable } from './Drawable.js';
import { Vec } from '../Vec.js';
import { Graphics } from '../Graphics.js';

export class Rect {
  private readonly _vec1: Vec;
  private readonly _vec2: Vec;
  
  constructor(vec1: Vec, vec2: Vec) {
    this._vec1 = vec1.clone;
    this._vec2 = vec2.clone;
    
    if (vec1.x > vec2.x) Vec.swapx(this._vec1, this._vec2);
    if (vec1.y < vec2.y) Vec.swapy(this._vec1, this._vec2);
  }
  
  get vecs(): [Vec, Vec] {
    return [this.vec1, this.vec2];
  }
  
  public draw(gfx: Graphics): void {
    for (let x = this._vec1.x; x <= this._vec2.x; ++x) {
      for (let y = this._vec1.y; y >= this._vec2.y; --y) {
        gfx.set(new Vec(x, y), val); // todo make a val
      }
    }
  }
}