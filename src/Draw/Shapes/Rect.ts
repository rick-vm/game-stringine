import { Shape } from '../Shape.js';
import { Vec } from '../../Vec.js';
import { Graphics } from '../../Graphics.js';

export class Rect extends Shape {
  private _from: Vec;
  private _to: Vec;

  constructor(from: Vec, to: Vec,) {
    super();
    this._from = from.clone();
    this._to = to.clone();

    if (from.x > to.x) Vec.swapx(this._from, this._to);
    if (from.y < to.y) Vec.swapy(this._from, this._to);
  }

  get from(): Vec { return this._from; }
  set from(from: Vec) {
    this._from = from.clone();
    if (from.x > this._to.x) Vec.swapx(this._from, this._to);
    if (from.y < this._to.y) Vec.swapy(this._from, this._to);
  }

  get to(): Vec { return this.to; }
  set to(to: Vec) {
    this._from = to.clone();
    if (this._from.x > to.x) Vec.swapx(this._from, this._to);
    if (this._from.y < to.y) Vec.swapy(this._from, this._to);
  }

  public draw(gfx: Graphics, val: string | undefined): void {
    for (let x = this._from.x; x <= this._to.x; ++x) {
      for (let y = this._from.y; y >= this._to.y; --y) {
        gfx.set(new Vec(x, y), val);
      }
    }
  }
}