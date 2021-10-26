export class QueueNode<T> {
	// public props
	public readonly value: T;
	public next: QueueNode<T> | null;

	constructor(value: T, next: QueueNode<T> | null = null) {
		this.value = value;
		this.next = next;
	}

	public link(next: QueueNode<T>): QueueNode<T> {
		this.next = next;
		return next;
	}

	public delink(): void {
		this.next = null;
	}
}

export class Queue<T> {
	// private props
	private _length;
	private _tail: QueueNode<T> | null = null;
	private _head: QueueNode<T> | null = null;

	constructor(values: T[]) {
		this._length = values.length;

		if (values.length !== 0) {
			let lastNode = this._head = new QueueNode<T>(values[0]!);

			for (let i = 1; i < values.length; i++) {
				lastNode = lastNode.link(new QueueNode<T>(values[i]!));
			}

			this._tail = lastNode;
		}
	}

	// public methods
	public queue(value: T): void {
		if (this._length === 0) {
			this._tail = this._head = new QueueNode(value);
		} else {
			this._tail = this._tail!.link(new QueueNode(value));
		}

		this._length++;
	}

	public dequeue(): T | null {
		if (this._length === 0) return null;

		const value = this._head!.value;
		this._head = this._head!.next;
		this._length--;

		return value;
	}
}
