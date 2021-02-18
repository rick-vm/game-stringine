import { Vec, vector } from './Vec.js';
import { CT } from './CoordTransformer.js';

export class Graphics extends CT {
  constructor(width: number, height: number) {
    super(width, height);
  }
  
  public at(vec: Vec): string {
    
  }

  public set(vec: Vec, val: string): string {

  }
}