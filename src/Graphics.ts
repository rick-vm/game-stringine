import { Vec } from './Vec.js';
import { CT } from './CoordTransformer.js';
import { Drawable } from './Drawables/Drawable.js';
import { Shape } from './Drawables/Shape.js';

export interface GraphicsOptions {
  background: string
}

export interface RenderOptions {
  foo: string
}

export class Graphics extends CT {
  private _pixels: string[];
  private readonly _background: string[];

  constructor(width: number, height: number, { background = '⬛' }: GraphicsOptions = { background: '⬛' }) {
    super(width, height);
    this._pixels = new Array<string>(width * height).fill(background);
    this._background = new Array<string>(width * height).fill(background);
  }

  public at(vec: Vec): string | undefined {
    return this._pixels[this.index(vec)];
  }

  public set(vec: Vec, val: string | undefined): string | undefined {
    const i = this.index(vec);
    const old = this._pixels[i];
    if (val) this._pixels[i] = val;
    return old;
  }

  public render(): string {
    const lines: string[] = [];
    for (let i = 0; i < this._pixels.length; i += this._width) {
      lines.push(this._pixels.slice(i, i + this._width).join(''));
    }
    return lines.join('\n');
  }

  public reset(): void {
    this._pixels = [...this._background];
  }

  public draw(shapeOrDrawable: Shape | Drawable, val?: string): void {
    shapeOrDrawable.draw(this, val);
  }
}