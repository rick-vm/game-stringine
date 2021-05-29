import { Vec, vec } from '../Vec/Vec.js';
import { CartesianCT } from '../Vec/CartesianCT.js';
import { StringMap } from '../Map/StringMap.js';

export class CartesianGrid extends CartesianCT {
	private readonly _background: string;
	private readonly _grid: string[];

	constructor(width: number, height: number, background = '⬛') {
		super(width, height);
		this._background = background;
		this._grid = new Array<string>(width * height);
		this._grid.fill(background);
	}

	public at(loc: Vec): string {
		return this._grid[this.index(loc)] || '';
	}

	public set(loc: Vec, value: string | undefined): string {
		if (this.inBounds(loc) && value) {
			const val = this._grid[this.index(loc)]!;
			this._grid[this.index(loc)] = value;
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

	public drawStringMap(map: StringMap, loc: Vec): void {
		for (let pos = vec(0, 0); pos.y > -map.height; pos.y--) {
			for (pos.x = 0; pos.x < map.width; pos.x++) {
				this.set(Vec.add(pos, loc), map.at(pos));
			}
		}
	}
}