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
const flags = [
    'Discord Employee',
    'Partnered Server Owner',
    'HypeSquad Events',
    'Bug Hunter Level 1',
    '',
    '',
    'House Bravery',
    'House Brilliance',
    'House Balance',
    'Early Supporter',
    'Team User',
    '',
    'System',
    '',
    'Bug Hunter Level 2',
    '',
    'Verified Bot',
    'Early Verified Bot Developer'
];
const userFlagArray = [];
// a random bitfield btw, so right now you might see empty entries in the array but with regular discord users with valid bitfields you won't see that
const userFlags = 219087; // <- is 0b110101011111001111 in binary btw, the bitfield of the user flags
for (let i = 0; i < 18; ++i) {
    // if the bitfield has the bit enabled push to the user flag array
    if (userFlags & (1 << i))
        userFlagArray.push(flags[i]);
}
console.log(userFlagArray);
//# sourceMappingURL=Grid.js.map