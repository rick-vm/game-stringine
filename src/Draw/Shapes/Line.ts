import { Shape } from '../Shape.js';
import { Vec } from '../../Vec.js';
import { Graphics } from '../../Graphics.js';

export class Line extends Shape {
  private _from: Vec;
  private _to: Vec;
  private _a: number;
  private _b: number;
  private _cached: boolean = false;

  constructor(from: Vec, to: Vec) {
    super();
    this._from = Vec.round(from);
    this._to = Vec.round(to);
  }

  get from(): Vec { return this._from; }
  set from(from: Vec) {
    this._from = Vec.round(from);
    this._cached = false;
  }

  get to(): Vec { return this.to; }
  set to(to: Vec) {
    this._to = Vec.round(to);
    this._cached = false;
  }

  public draw(gfx: Graphics, val: string | undefined): void {
    if (!this._cached) {
      this._dx      = Math.abs(this._from.x - this._to.x);
      this._dy      = Math.abs(this._from.y - this._to.y);
      this._sx      = this._from.x < this._to.x ? 1 : -1;
      this._sy      = this._from.y < this._to.y ? 1 : -1;
      this._err     = this._dx - this.dy;
      this._cached  = true;
    }
    const curPos = this._from.clone();
    let err = this._err;
    while (curPos.x !== this._to.x || curPos.y !== this._to.y) {
      gfx.set(curPos, val);

      const e2 = err * 2;

      if (e2 > -this._dy) { err -= this._dy; curPos.x += this._sx; }
      if (e2 < this._dx) { err += this._dx; curPos.y += this._sy; }
    }
    gfx.set(curPos, val);
  }
}