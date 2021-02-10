import { Vec, vec } from '../Vec/Vec.js';
import { CartesianCoordTransformer } from '../Vec/CartesianCoordTransformer.js';
import { StringMap } from '../Map/StringMap.js';

export class CartesianGrid extends CartesianCoordTransformer {
  private readonly _background: string;
  private readonly _grid: string[];

  constructor(width: number, height: number, background = '⬛') {
    super(width, height);
    this._background = background;
    this._grid = new Array<string>(width * height);
    this._grid.fill(background);
  }

  public at(vec: Vec): string {
    return this._grid[this.index(vec)] || '';
  }

  public set(vec: Vec, value: string | undefined): string {
    if (this.inbounds(vec) && value) {
      const val = this._grid[this.index(vec)]!;
      this._grid[this.index(vec)] = value;
      return val;
    } else {
      return '';
    }
  }

  public reset(): string[] {
    const prevFrame = this._grid;
    this._grid.fill(this._background);
    return prevFrame;
  }

  public fill(val = this._background): string[] {
    const prevFrame = this._grid;
    this._grid.fill(val);
    return prevFrame;
  }

  public render(): string {
    const rows: string[] = [];
    for (let i = 0; i < this._grid.length; i += this.width) rows.push(this._grid.slice(i, i + this.width).join(''));
    return rows.join('\n');
  }

  public drawStringMap(map: StringMap): void {
    for (let x = 0; x < map.width; ++x) {
      for (let y = 0; y < map.height; ++y) {
        console.log(vec(x, y), map.at(vec(x, y)));
        const curPos = vec(x, y);
        this.set(curPos, map.at(curPos));
      }
    }
  }
}