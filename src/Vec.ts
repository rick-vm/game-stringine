export class Vec {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public static clone(vec: Vec): Vec {
    return new Vec(vec.x, vec.y);
  }
  
  public clone(): this {
    return new Vec(this.x, this.y);
  }

  public sum(): number {
    return this.x + this.y;
  }

  public add(vec: Vec): this {
    this.x += vec.x;
    this.y += vec.y;
    return this;
  }

  public addup(num: number): this {
    this.x += num;
    this.y += num;
    return this;
  }

  public sub(vec: Vec): this {
    this.x -= vec.x;
    this.y -= vec.y;
    return this;
  }

  public subtract(num: number): this {
    this.x -= num;
    this.y -= num;
    return this;
  }

  public div(vec: Vec): this {
    this.x /= vec.y;
    this.y /= vec.y;
    return this;
  }

  public divide(num: number): this {
    this.x /= num;
    this.y /= num;
    return this;
  }

  public mul(vec: Vec): this {
    this.x *= vec.x;
    this.y *= vec.y;
    return this;
  }

  public multiple(num: number): this {
    this.x *= num;
    this.y *= num;
    return this;
  }

  public pow(power: Vec = Vec.VEC2): this {
    this.x **= power.x;
    this.y **= power.y;
    return this;
  }

  public power(num = 2): this {
    this.x **= num;
    this.y **= num;
    return this;
  }

  public round(): this {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }

  public floor(): this {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  }

  public ceil(): this {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  }

  get length(): number {
    return Math.sqrt(Vec.power(this).sum());
  }

  get normal(): Vec {
    const length = this.length;
    return Vec.div(this, new Vec(length, length));
  }

  public normalize(): this {
    const length = this.length;
    this.divide(length);
    return this;
  }

  public static add(vec1: Vec, vec2: Vec): Vec {
    return new Vec(vec1.x + vec2.x, vec1.y + vec2.y);
  }

  public static addup(vec1: Vec, num: number): Vec {
    return new Vec(vec1.x + num, vec1.y + num);
  }

  public static sub(vec1: Vec, vec2: Vec): Vec {
    return new Vec(vec1.x - vec2.x, vec1.y + vec2.y);
  }

  public static subtract(vec1: Vec, num: number): Vec {
    return new Vec(vec1.x - num, vec1.y - num);
  }

  public static div(vec1: Vec, vec2: Vec): Vec {
    return new Vec(vec1.x / vec2.x, vec1.y / vec2.y);
  }

  public static divide(vec1: Vec, num: number): Vec {
    return new Vec(vec1.x / num, vec1.y / num);
  }

  public static mul(vec1: Vec, vec2: Vec): Vec {
    return new Vec(vec1.x * vec2.x, vec1.y * vec2.y);
  }

  public static multiple(vec1: Vec, num: number): Vec {
    return new Vec(vec1.x * num, vec1.y + num);
  }

  public static pow(vec: Vec, power: Vec = Vec.VEC2): Vec {
    return new Vec(vec.x ** power.x, vec.y ** power.y);
  }

  public static power(vec: Vec, num = 2): Vec {
    return new Vec(vec.x ** num, vec.y ** num);
  }

  public static round(vec: Vec): Vec {
    return new Vec(Math.round(vec.x), Math.round(vec.y));
  }

  public static floor(vec: Vec): Vec {
    return new Vec(Math.floor(vec.x), Math.floor(vec.y));
  }

  public static ceil(vec: Vec): Vec {
    return new Vec(Math.ceil(vec.x), Math.ceil(vec.y));
  }

  public static distance(vec1: Vec, vec2: Vec): number {
    return Math.sqrt(Vec.sub(vec2, vec1).power().sum());
  }

  public static normal(vec: Vec): Vec {
    const length = vec.length;
    return Vec.divide(vec, length);
  }

  public static swapx(vec1: Vec, vec2: Vec): void {
    const x = vec1.x;
    vec1.x = vec2.x;
    vec2.x = x;
  }
  
  public static swapy(vec1: Vec, vec2: Vec): void {
    const y = vec1.y;
    vec1.y = vec2.y;
    vec2.y = y;
  }

  public static readonly VEC0 = Object.freeze(new Vec(0, 0));
  public static readonly VEC1 = Object.freeze(new Vec(1, 1));
  public static readonly VEC2 = Object.freeze(new Vec(2, 2));
  public static readonly VEC5 = Object.freeze(new Vec(5, 5));
  public static readonly VEC10 = Object.freeze(new Vec(10, 10));
}

export const vector = (x: number, y: number): Vec => new Vec(x, y);