import { Graphics } from '../Graphics.js';

export abstract class Shape {
  public abstract draw(gfx: Graphics, val: string | undefined): void;
}