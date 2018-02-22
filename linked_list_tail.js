function Node (data) {
    this._data = data;
    this.next = null;
}

function SinglyLinkedList() {
    this._size = 0;
    this._head = null;
    this._tail = null;
}

SinglyLinkedList.prototype.size = function () {
    // O(1)
    return this._size;
};

SinglyLinkedList.prototype.empty = function () {
    // O(1)
    return this._size === 0;
};

SinglyLinkedList.prototype.valueAt = function (index) {
    // O(N)
    let item = this._head,
        count = 0;
    
    while (item.next !== null && count !== index) {
        item = item.next; 
        count += 1;
    }
    if (count === index && item !== null) {
        return item._data;
    }

    return null;
};

SinglyLinkedList.prototype.pushFront = function (data) {
    // O(1)
    let node = new Node(data);
    if (this._size === 0) {
        this._head = node;
        this._tail = node;
    } else {
        node.next = this._head;
        this._head = node;
    }
    this._size += 1;
};

SinglyLinkedList.prototype.popFront = function () {
    // O(1)
    if (this._size > 0) {
        let deleted = this._head;
        this._head = this._head.next;
        this._size -= 1;
        return deleted._data;
    }
    return "Underflow!";
};

SinglyLinkedList.prototype.pushBack = function (data) {
    // O(1)
    let node = new Node(data);
    if (this._head === null) {
        this._head = node;
    } else {
        this._tail.next = node;
    }
    this._size += 1;
    this._tail = node;
};

SinglyLinkedList.prototype.popBack = function () {
    // O(N)
    if (this._size > 0) {
        let item = this._head;
        while (item.next.next !== null) {
            item = item.next;
        }
        let deleted = item.next;
        delete item.next;
        item.next = null;
        this._tail = item;
        this._size -= 1;
        return deleted._data;
    }
    
    return "Underflow!";
};

SinglyLinkedList.prototype.front = function () {
    // O(1)
    if (this._size > 0) {
        return this._head._data;
    }
    return "No items in list";
};

SinglyLinkedList.prototype.back = function () {
    // O(1)
    if (this._size > 0) {
        return this._tail._data;
    }
    return "No items in list";
};

let myList = new SinglyLinkedList();
myList.pushFront(4);
myList.pushFront(3);
myList.pushFront(2);
myList.pushFront(1);
myList.pushBack(5);
console.log(myList.back()); // 5
console.log(myList.popBack()); // 5
console.log(myList.back()); // 4
console.log(myList.popBack()); // 4
console.log(myList.popBack()); // 3
console.log(myList.popBack()); // 2
console.log(myList.back()); // 1
console.log(myList.front()); // 1
