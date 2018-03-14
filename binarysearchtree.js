class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        if (this.root === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = (node) => {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };

            return searchTree(this.root);
        }
    }

    findMin() {
        let item = this.root;
        if (this.root === null) {
            return null;
        } else {
            while (item.left) {
                item = item.left;
            }

            return item.data;
        }
    }

    findMax() {
        let item = this.root;
        if (this.root === null) {
            return null;
        } else {
            while (item.right) {
                item = item.right;
            }

            return item.data;
        }
    }

    isPresent(data) {
        if (this.root === null) {
            return false;
        } else {
            const searchTree = (node) => {
                if (data < node.data) {
                    if (node.left === null) {
                        return false;
                    } else {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        return false;
                    } else {
                        return searchTree(node.right);
                    }
                }
                return true;
            };

            return searchTree(this.root);
        }
    }
}