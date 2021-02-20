import { Shape } from '../Shape.js';
import { Vec } from '../../Vec.js';
import { Graphics } from '../../Graphics.js';

export class Line extends Shape {
  private _from: Vec;
  private _to: Vec;
  private _dx: number;
  private _dy: number;
  private _sx: number;
  private _sy: number;
  private _err: number;

  constructor(from: Vec, to: Vec,) {
    super();
    this._from = from.clone();
    this._to = to.clone();

    this._dx = Math.abs(from.x - to.x);
    this._dy = Math.abs(from.y - to.y);
    this._sx = (from.x < to.x) ? 1 : -1;
    this._sy = (from.y < to.y) ? 1 : 0;
    this._err = (this._dx - this._dy);
  }

  get from(): Vec { return this._from; }
  set from(from: Vec) {
    this._from = from.clone();
  }

  get to(): Vec { return this.to; }
  set to(to: Vec) {
    this._to = to.clone();
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