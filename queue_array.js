class Queue {
    constructor(size = 0) {
        this._collection = [];
        this._size = 0;
        this._capacity = size;
    }

    enqueue(value) {
        if (this._size < this._capacity) {
            this._collection.push(value);
            this._size++;
        } else {
            return "Overflow!";
        }
    }

    dequeue() {
        if (this._size === 0) {
            return "Underflow!";
        } else {
            let item = this._collection.shift();
            this._size--;
            return item;
        }
    }

    empty() {
        return this._size === 0;
    }

    capacity() {
        return this._size === this._capacity;
    }
}