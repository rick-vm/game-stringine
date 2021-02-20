import { Shape } from '../Shape.js';
import { Vec } from '../../Vec.js';
import { Graphics } from '../../Graphics.js';

export class Line extends Shape {
  private _from: Vec;
  private _to: Vec;
  private _a: number;
  private _b: number;

  constructor(from: Vec, to: Vec,) {
    super();
    const lt = to.x >= from.x;
    this._from = Vec.round(lt ? from : to);
    this._to = Vec.round(lt ? to : from);
  }

  get from(): Vec { return this._from; }
  set from(from: Vec) {
    this._from = Vec.round(from);
    this._dx = Math.abs(from.x - this._to.x);
    this._dy = Math.abs(from.y - this._to.y);
    this._sx = (from.x < this._to.x) ? 1 : -1;
    this._sy = (from.y < this._to.y) ? 1 : 0;
    this._err = (this._dx - this._dy);
  }

  get to(): Vec { return this.to; }
  set to(to: Vec) {
    this._to = Vec.round(to);
    this._dx = Math.abs(this._from.x - to.x);
    this._dy = Math.abs(this._from.y - to.y);
    this._sx = (this._from.x < to.x) ? 1 : -1;
    this._sy = (this._from.y < to.y) ? 1 : 0;
    this._err = (this._dx - this._dy);
  }

  public draw(gfx: Graphics, val: string | undefined): void {
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