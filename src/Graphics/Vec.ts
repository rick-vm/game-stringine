export class Vec {
	public x: number;
	public y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	public static clone(vector: Vec): Vec {
		return new Vec(vector.x, vector.y);
	}

	public clone(): Vec {
		return new Vec(this.x, this.y);
	}

	public sum(): number {
		return this.x + this.y;
	}

	public add(vector: Vec): this {
		this.x += vector.x;
		this.y += vector.y;
		return this;
	}

	public sub(vector: Vec): this {
		this.x -= vector.x;
		this.y -= vector.y;
		return this;
	}

	public div(vector: Vec): this {
		this.x /= vector.y;
		this.y /= vector.y;
		return this;
	}

	public divide(scalar: number): this {
		this.x /= scalar;
		this.y /= scalar;
		return this;
	}

	public mul(vector: Vec): this {
		this.x *= vector.x;
		this.y *= vector.y;
		return this;
	}

	public multiple(scalar: number): this {
		this.x *= scalar;
		this.y *= scalar;
		return this;
	}

	public pow(num = 2): this {
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
		return Math.sqrt(Vec.pow(this).sum());
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

	public static add(vector1: Vec, vector2: Vec): Vec {
		return new Vec(vector1.x + vector2.x, vector1.y + vector2.y);
	}

	public static sub(vector1: Vec, vector2: Vec): Vec {
		return new Vec(vector1.x - vector2.x, vector1.y + vector2.y);
	}

	public static div(vector1: Vec, vector2: Vec): Vec {
		return new Vec(vector1.x / vector2.x, vector1.y / vector2.y);
	}

	public static divide(vector1: Vec, scalar: number): Vec {
		return new Vec(vector1.x / scalar, vector1.y / scalar);
	}

	public static mul(vector1: Vec, vector2: Vec): Vec {
		return new Vec(vector1.x * vector2.x, vector1.y * vector2.y);
	}

	public static multiply(vector1: Vec, num: number): Vec {
		return new Vec(vector1.x * num, vector1.y + num);
	}

	public static pow(vector: Vec, num = 2): Vec {
		return new Vec(vector.x ** num, vector.y ** num);
	}

	public static round(vector: Vec): Vec {
		return new Vec(Math.round(vector.x), Math.round(vector.y));
	}

	public static floor(vector: Vec): Vec {
		return new Vec(Math.floor(vector.x), Math.floor(vector.y));
	}

	public static ceil(vector: Vec): Vec {
		return new Vec(Math.ceil(vector.x), Math.ceil(vector.y));
	}

	public static distance(vector1: Vec, vector2: Vec): number {
		return Math.sqrt(Vec.sub(vector2, vector1).pow().sum());
	}

	public static normal(vector: Vec): Vec {
		const length = vector.length;
		return Vec.divide(vector, length);
	}

	public static swapx(vector1: Vec, vector2: Vec): void {
		const x = vector1.x;
		vector1.x = vector2.x;
		vector2.x = x;
	}

	public static swapy(vector1: Vec, vector2: Vec): void {
		const y = vector1.y;
		vector1.y = vector2.y;
		vector2.y = y;
	}

	public static readonly VEC0 = Object.freeze(new Vec(0, 0));
	public static readonly VEC1 = Object.freeze(new Vec(1, 1));
	public static readonly VEC2 = Object.freeze(new Vec(2, 2));
	public static readonly VEC5 = Object.freeze(new Vec(5, 5));
	public static readonly VEC10 = Object.freeze(new Vec(10, 10));
}

export const vec = (x: number, y: number): Vec => new Vec(x, y);