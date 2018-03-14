class Node {
    constructor(data, next = null) {
        this._data = data;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    empty() {
        return this._size === 0;
    }

    enqueue(data) {
        let node = new Node(data);
        if (this._head === null) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            this._tail = node;
        }
        this._size += 1;
    }

    dequeue(data) {
        if (this._size > 0) {
            let item = this._head;
            this._head = this._head.next;
            if (this._size === 1) {
                this._tail = null;
            }
            this._size--;
            return item._data;
        } else {
            return "Underflow!";
        }
    }
}