/**
 * Simple implementation of a vector of length 3.
 * z operations are excluded from all methods apart from z-axis-specific methods. 
 * This is because the z component only serves as a depth component and is used for 
 * depth calculations with the depth texture of the camera.
 */
export class Vec {
	// public props
	public x: number;
	public y: number;
	public z: number;
	
	// public static props
	public static readonly VEC0 = Object.freeze(new Vec(0, 0));
	public static readonly VEC1 = Object.freeze(new Vec(1, 1));
	public static readonly VEC2 = Object.freeze(new Vec(2, 2));

	/**
	 * Simple implementation of a vector of length 3.
	 * z operations are excluded from all methods apart from z-axis-specific methods. 
	 * This is because the z component only serves as a depth component and is used for 
	 * depth calculations with the depth texture of the camera.
	 * 
	 * @param x - The x component. 
	 * @param y - The y component.
	 * @param z - The z component.
	 */
	constructor(x: number, y: number, z?: number);
	constructor();
	constructor(x = 0, y = 0, z = 0) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	// public methods
	public copy(): Vec {
		return new Vec(this.x, this.y);
	}

	public angleTo(rhs: Vec): number {
		return Math.atan2(rhs.y - this.y, rhs.x - this.x);
	}

	public angle(): number {
		return Math.atan2(this.y, this.x);
	}

	public sqrMagnitude(): number {
		return Vec.pow(this).sum();
	}

	public magnitude(): number {
		return Math.sqrt(Vec.pow(this).sum());
	}

	public sum(): number {
		return this.x + this.y;
	}

	public neg(): this {
		this.x = -this.x;
		this.y = -this.y;
		return this;
	}

	public neg_x(): this {
		this.x = -this.x;
		return this;
	}

	public neg_y(): this {
		this.y = -this.y;
		return this;
	}

	public neg_z(): this {
		this.z = -this.z;
		return this;
	}

	public add(rhs: Vec): this {
		this.x += rhs.x;
		this.y += rhs.y;
		return this;
	}

	public sub(rhs: Vec): this {
		this.x -= rhs.x;
		this.y -= rhs.y;
		return this;
	}

	public div(rhs: Vec): this {
		this.x /= rhs.y;
		this.y /= rhs.y;
		return this;
	}

	public divide(rhs: number): this {
		this.x /= rhs;
		this.y /= rhs;
		return this;
	}

	public mul(rhs: Vec): this {
		this.x *= rhs.x;
		this.y *= rhs.y;
		return this;
	}

	public multiply(rhs: number): this {
		this.x *= rhs;
		this.y *= rhs;
		return this;
	}

	public pow(rhs = 2): this {
		this.x **= rhs;
		this.y **= rhs;
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

	public normalize(): this {
		this.divide(this.magnitude());
		return this;
	}

	// public static methods
	public static add(lhs: Vec, rhs: Vec): Vec {
		return new Vec(lhs.x + rhs.x, lhs.y + rhs.y);
	}

	public static sub(lhs: Vec, rhs: Vec): Vec {
		return new Vec(lhs.x - rhs.x, lhs.y - rhs.y);
	}

	public static div(lhs: Vec, rhs: Vec): Vec {
		return new Vec(lhs.x / rhs.x, lhs.y / rhs.y);
	}

	public static divide(lhs: Vec, rhs: number): Vec {
		return new Vec(lhs.x / rhs, lhs.y / rhs);
	}

	public static mul(lhs: Vec, rhs: Vec): Vec {
		return new Vec(lhs.x * rhs.x, lhs.y * rhs.y);
	}

	public static multiply(lhs: Vec, rhs: number): Vec {
		return new Vec(lhs.x * rhs, lhs.y * rhs);
	}

	public static pow(lhs: Vec, rhs = 2): Vec {
		return new Vec(lhs.x ** rhs, lhs.y ** rhs);
	}

	public static random(magnitude = 1): Vec {
		const angle = Math.random() * Math.PI;
		return new Vec(Math.cos(angle) * magnitude, Math.sin(angle) * magnitude);
	}

	public static fromAngle(angle: number, magnitude = 1): Vec {
		return new Vec(Math.cos(angle) * magnitude, Math.sin(angle) * magnitude);
	}

	public static round(lhs: Vec): Vec {
		return new Vec(Math.round(lhs.x), Math.round(lhs.y));
	}

	public static floor(lhs: Vec): Vec {
		return new Vec(Math.floor(lhs.x), Math.floor(lhs.y));
	}

	public static ceil(lhs: Vec): Vec {
		return new Vec(Math.ceil(lhs.x), Math.ceil(lhs.y));
	}

	public static distance(lhs: Vec, rhs: Vec): number {
		return Math.sqrt(Vec.sub(rhs, lhs).pow().sum());
	}

	public static sqrDistance(lhs: Vec, rhs: Vec): number {
		return Vec.sub(rhs, lhs).pow().sum();
	}

	public static normal(rhs: Vec): Vec {
		return Vec.divide(rhs, rhs.magnitude());
	}

	public static angleBetween(lhs: Vec, rhs: Vec): number {
		return lhs.angleTo(rhs);
	}

	public static swap_x(lhs: Vec, rhs: Vec): void {
		const x = lhs.x;
		lhs.x = rhs.x;
		rhs.x = x;
	}

	public static swap_y(lhs: Vec, rhs: Vec): void {
		const y = lhs.y;
		lhs.y = rhs.y;
		rhs.y = y;
	}

	public static swap_z(lhs: Vec, rhs: Vec): void {
		const z = lhs.z;
		lhs.z = rhs.z;
		rhs.z = z;
	}

	public static swap(lhs: Vec, rhs: Vec): void {
		const { x, y, z } = lhs;
		lhs.x = rhs.x;
		lhs.y = rhs.y;
		lhs.z = rhs.y;
		rhs.x = x;
		rhs.y = y;
		rhs.z = z;
	}
}