class Node {
    constructor(data, next = null) {
        this._data = data;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this._size = 0;
        this._head = null;
    }

    size() {
        // O(1)
        return this._size;
    }

    empty() {
        // O(1)
        return this._size === 0;
    }

    valueAt(index) {
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
    }

    pushFront(data) {
        // O(1)
        let node = new Node(data);

        if (this._size === 0) {
            this._head = node;
        } else {
            node.next = this._head;
            this._head = node;
        }
        this._size += 1;
    }

    popFront() {
        // O(1)
        if (this._size > 0) {
            let deleted = this._head;
            this._head = this._head.next;
            this._size -= 1;
            return deleted._data;
        }
        return "Underflow!";
    }

    pushBack(data) {
        // O(N)
        let node = new Node(data);
        
        if (this._head === null) {
            this._head = node;
        } else {
            let item = this._head;
            while (item.next !== null) {
                item = item.next;
            }
            item.next = node;
        }
        this._size += 1;
    }

    popBack() {
        // O(N)
        if (this._size > 0) {
            let item = this._head;
            while (item.next.next !== null) {
                item = item.next;
            }
            let deleted = item.next;
            delete item.next;
            item.next = null;
            this._size -= 1;
            return deleted._data;
        }
        
        return "Underflow!";
    }

    front() {
        // O(1)
        if (this._size > 0) {
            return this._head._data;
        }
        return "No items in list";
    }

    back() {
        // O(N)
        if (this._size > 0) {
            let item = this._head;
            while (item.next !== null) {
                item = item.next;
            }
            return item._data;
        }
        return "No items in list";
    }

    insert(index, value) {
        // O(N)
        let count = 0,
            item = this._head,
            node = new Node(value);

        if (index === 0) {
            node.next = this._head
            this._head = node;
            this._size++;
            return;
        } else {
            while (item.next !== null && count < index - 1) {
                item = item.next;
                count++;
            }
        }

        if (count === index - 1) {
            node.next = item.next;
            item.next = node;
            this._size++;
        } else {
            return "Index out of range! Please choose a value between 0 and " + this._size;
        }
    }

    erase(index) {
        // O(N)
        let count = 0,
            item = this._head;

        if (index === 0) {
            this._head = item.next;
            this._size--;
            return;
        } else {
            while (item.next !== null && count < index - 1) {
                item = item.next;
                count++;
            }
        }

        if (count === index - 1) {
            item.next = item.next.next;
            this._size--;
        } else {
            return "Index out of range! Please choose a value between 0 and " + this._size;
        }
    }

    removeValue(value) {
        // O(N)
        let item = this._head;
        if (item._data === value) {
            this._head = item.next;
            this._size--;
        } else {
            while (item.next !== null && item.next._data !== value) {
                item = item.next;
            }
        }
        if (item.next === null) {
            return "Value not in list";
        } else {
            item.next = item.next.next;
            this._size--;
        }
    }

    valueNFromEnd(n) {
        // O(N)
        let listLength = 0,
            item = this._head,
            travelDistance;

        while (item.next) {
            item = item.next;
            listLength++;
        }

        if (n > listLength) {
            return "Out of bounds";
        } else if (n === 0) {
            return item._data;
        }

        travelDistance = listLength - n;
        item = this._head;

        while (travelDistance !== 0) {
            item = item.next;
            travelDistance--;
        }

        return item._data;
    }

    reverse() {
        // O(N)
        let currentNode = this._head,
            previousNode = null,
            nextNode = null;

        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }

        this._head = previousNode;
    }
}