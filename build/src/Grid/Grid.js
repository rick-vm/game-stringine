import { Vec } from '../Vec/Vec.js';
export class Grid {
    constructor(width, height, background) {
        this._width = width;
        this._height = height;
        this._background = background;
        this._grid = new Array(width * height);
        this._grid.fill(background);
    }
    at(x, y) {
        return this._grid[y * this._width] || '';
    }
    inBounds(x, y) {
        return x >= 0 || x < this._width || y >= 0 || y < this._height;
    }
    set(vec, value) {
        if (this.inBounds(vec.x, vec.y)) {
            const val = this._grid[this.index(vec)];
            this._grid[this.index(vec)] = value;
            return val;
        }
        else {
            return '';
        }
    }
    index(vec) {
        return vec.y * this._width + vec.x;
    }
    reset() {
        const prevFrame = this._grid;
        this._grid.fill(this._background);
        return prevFrame;
    }
}
export class CoordTransformer {
    constructor(width, height) {
        this._width = width;
        this._height = height;
        this._center = new Vec(width, height);
    }
    transform(vec) {
        const transformed = Vec.add(vec, this._center);
        return transformed;
    }
}
//# sourceMappingURL=Grid.js.map