import { Grid, CoordTransformer, CartesianGrid, vec } from '../index.js';

const grid = new CartesianGrid(5, 5);

console.log(grid.set(vec(0, 0), '🟩'));

console.log(grid.render());