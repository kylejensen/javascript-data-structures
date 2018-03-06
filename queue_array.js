var Queue = function (size) {
    this._collection = [];
    this._size = 0;
    this._capacity = size;
};

Queue.prototype.enqueue = function (value) {
    if (this._size < this._capacity) {
        this._collection.push(value);
        this._size++;
    } else {
        return "Overflow!";
    }
};

Queue.prototype.dequeue = function () {
    if (this._size === 0) {
        return "Underflow!";
    } else {
        var item = this._collection.shift();
        this._size--;
        return item;
    }
};

Queue.prototype.empty = function () {
    return this._size === 0;
};

Queue.prototype.full = function () {
    return this._size === this._capacity;
};