import { Grid, CoordTransformer, CartesianGrid, vec } from '../index.js';

const grid = new CartesianGrid(4, 4);

console.log(grid.index_tf(vec(1, 0)));

console.log(grid.render());