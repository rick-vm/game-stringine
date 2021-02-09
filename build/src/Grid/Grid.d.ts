import { Vec } from '../Vec/Vec.js';
export declare class Grid {
    private readonly _width;
    private readonly _height;
    private readonly _background;
    private readonly _grid;
    constructor(width: number, height: number, background: string);
    at(x: number, y: number): string;
    inBounds(x: number, y: number): boolean;
    set(vec: Vec, value: string): string;
    private index;
    reset(): string[];
}
export declare class CoordTransformer {
    private readonly _width;
    private readonly _height;
    private readonly _center;
    constructor(width: number, height: number);
    transform(vec: Vec): Vec;
}
