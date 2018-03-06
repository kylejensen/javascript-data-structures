class HashTable {
    constructor() {
        this._storage = {};
        this._count = 0;
        this._limit = 8;
    }

    hash(k, m) {
        let hash = 0,
            len = k.length;
        for (let i = 0; i < len; i++) {
            let letter = k[i];
            hash = (hash >> 5) + letter.charCodeAt(0);
            hash = (hash & hash) % m;
        }
        return hash;
    }

    add(k, val) {
        let hash = this.hash(k, this._limit);
        this._storage[hash] = [k, val];
        this._count++;
        return;
    }

    exists(k) {
        let hash = this.hash(k, this._limit);
        if (this._storage[hash] && this._storage[hash][0] === k) {
            return true;
        }
        return false;
    }

    get(k) {
        let hash = this.hash(k, this._limit);
        if (this._storage[hash] && this._storage[hash][0] === k) {
            return this._storage[hash]
        }
        return "Key not in hash table";
    }

    remove(k) {
        let hash = this.hash(k, this._limit);
        if (this._storage[hash]) {
            delete this._storage[hash];
        }
        this._count--;
        return;
    }
}