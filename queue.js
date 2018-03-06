var Queue = function () {
    this._head = null;
    this._tail = null;
    this._size = 0;
};

var Node = function (data) {
    this._data = data;
    this.next = null;
};

Queue.prototype.empty = function () {
    return this._size === 0;
};

Queue.prototype.enqueue = function (value) {
    var node = new Node(value);
    if (this._head === null) {
        this._head = node;
        this._tail = node;
    } else {
        this._tail.next = node;
        this._tail = node;
    }
    this._size++;
};

Queue.prototype.dequeue = function () {
    if (this._size > 0) {
        var item = this._head;
        this._head = this._head.next;
        if (this._size === 1) {
            this._tail = null;
        }
        this._size--;
        return item._data;
    } else {
        return "Underflow!";
    }
};