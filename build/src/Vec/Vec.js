export class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static clone(vec) {
        return new Vec(vec.x, vec.y);
    }
    sum() {
        return this.x + this.y;
    }
    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }
    addup(num) {
        this.x += num;
        this.y += num;
        return this;
    }
    sub(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }
    subtract(num) {
        this.x -= num;
        this.y -= num;
        return this;
    }
    div(vec) {
        this.x /= vec.y;
        this.y /= vec.y;
        return this;
    }
    divide(num) {
        this.x /= num;
        this.y /= num;
        return this;
    }
    mul(vec) {
        this.x *= vec.x;
        this.y *= vec.y;
        return this;
    }
    multiple(num) {
        this.x *= num;
        this.y *= num;
        return this;
    }
    pow(power = Vec.VEC2) {
        this.x **= power.x;
        this.y **= power.y;
        return this;
    }
    power(num = 2) {
        this.x **= num;
        this.y **= num;
        return this;
    }
    get length() {
        return Math.sqrt(Vec.power(this).sum());
    }
    get normal() {
        const length = this.length;
        return Vec.div(this, new Vec(length, length));
    }
    normalize() {
        const length = this.length;
        this.divide(length);
        return this;
    }
    static add(vec1, vec2) {
        return new Vec(vec1.x + vec2.x, vec1.y + vec2.y);
    }
    static addup(vec1, num) {
        return new Vec(vec1.x + num, vec1.y + num);
    }
    static sub(vec1, vec2) {
        return new Vec(vec1.x - vec2.x, vec1.y + vec2.y);
    }
    static subtract(vec1, num) {
        return new Vec(vec1.x - num, vec1.y - num);
    }
    static div(vec1, vec2) {
        return new Vec(vec1.x / vec2.x, vec1.y / vec2.y);
    }
    static divide(vec1, num) {
        return new Vec(vec1.x / num, vec1.y / num);
    }
    static mul(vec1, vec2) {
        return new Vec(vec1.x * vec2.x, vec1.y * vec2.y);
    }
    static multiple(vec1, num) {
        return new Vec(vec1.x * num, vec1.y + num);
    }
    static pow(vec, power = Vec.VEC2) {
        return new Vec(vec.x ** power.x, vec.y ** power.y);
    }
    static power(vec, num = 2) {
        return new Vec(vec.x ** num, vec.y ** num);
    }
    static distance(vec1, vec2) {
        return new Vec(vec2.x - vec1.x, vec2.y - vec1.y);
    }
    static normal(vec) {
        const length = vec.length;
        return Vec.divide(vec, length);
    }
}
Vec.VEC1 = new Vec(1, 1);
Vec.VEC2 = new Vec(2, 2);
Vec.VEC5 = new Vec(5, 5);
Vec.VEC10 = new Vec(10, 10);
//# sourceMappingURL=Vec.js.map