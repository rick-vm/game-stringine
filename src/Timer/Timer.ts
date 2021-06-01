export class Timer {
	private _pt: bigint = process.hrtime.bigint();

	private time(): bigint {
		return process.hrtime.bigint();
	}

	public dt(): number {
		const ct = this.time();
		const dt = ct - this._pt;
		this._pt = ct;
		return Number(dt) / 1000000000;
	}
}