import { CT } from '../src/CoordTransformer.js';
import OutputFile from './OutputFile.js';
import { vector } from '../src/Vec.js';
const ct = new CT(5, 5);

const of = new OutputFile('./test/output.txt');

of.output(ct.index(vector(2, -2)));