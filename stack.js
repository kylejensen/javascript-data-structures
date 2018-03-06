var Stack = function () {
    this._size = 0;
    this._storage = {};
};

Stack.prototype.push = function (data) {
    this._size++;
    this._storage[this._size] = data;
};

Stack.prototype.pop = function () {
    var size = this._size,
        deleted;

    if (size > 0) {
        deleted = this._storage[size];
        delete this._storage[size];
        this._size--;

        return deleted;
    }
    return "Underflow!";
};

Stack.prototype.peek = function () {
    if (this._size > 0) {
        return this._storage[this._size];
    }
    return "Stack empty";
};

Stack.prototype.isEmpty = function () {
    return this._size === 0;
};

Stack.prototype.size = function () {
    return this._size;
};