var HashTable = function () {
    this._storage = {};
    this._count = 0;
    this._limit = 8;
};

HashTable.prototype.hash = function (k, m) {
    var hash = 0,
        len = k.length;
    for (var i = 0; i < len; i++) {
        var letter = k[i];
        hash = (hash << 5) + letter.charCodeAt(0);
        hash = (hash & hash) % m;
    }
    return hash;
};

HashTable.prototype.add = function (k, val) {
    var hash = this.hash(k, this._limit);

    this._storage[hash] = [k, val];
    this._count++;
};

HashTable.prototype.exists = function (k) {
    var hash = this.hash(k, this._limit);

    if (this._storage[hash] && this._storage[hash][0] === k) {
        return true;
    }
    return false;
};

HashTable.prototype.get = function (k) {
    var hash = this.hash(k, this._limit);

    return this._storage[hash];
};

HashTable.prototype.remove = function (k) {
    var hash = this.hash(k, this._limit);

    delete this._storage[hash];
    return;
};
