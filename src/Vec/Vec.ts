
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

  public static distance(vec1: Vec, vec2: Vec): Vec {
    return new Vec(vec2.x - vec1.x, vec2.y - vec1.y);
  }

  public static normal(vec: Vec): Vec {
    const length = vec.length;
    return Vec.divide(vec, length);
  }

  public static readonly VEC1 = new Vec(1, 1);
  public static readonly VEC2 = new Vec(2, 2);
  public static readonly VEC5 = new Vec(5, 5);
  public static readonly VEC10 = new Vec(10, 10);
}