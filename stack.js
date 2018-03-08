class Stack {
    constructor() {
        this._size = 0;
        this._storage = {};
    }

    push(data) {
        this._size++;
        this._storage[this._size] = data;
    }

    pop() {
        let size = this._size,
            deleted;
        
        if (size > 0) {
            deleted = this._storage[size];
            delete this._storage[size];
            this._size--;

            return deleted;
        }

        return 'Underflow!';
    }

    peek() {
        if (this._size > 0) {
            return this._storage[this._size];
        }
        return "Stack empty";
    }

    isEmpty() {
        return this._size === 0;
    }

    size() {
        return this._size;
    }
}