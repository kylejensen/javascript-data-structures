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

    findMinHeight(node = this.root) {
        if (node === null) {
            return -1;
        } else {
            let left = this.findMinHeight(node.left),
                right = this.findMinHeight(node.right);

            if (left < right) {
                return left + 1;
            } else {
                return right + 1;
            }
        }
    }

    findMaxHeight(node = this.root) {
        if (node === null) {
            return -1;
        } else {
            let left = this.findMaxHeight(node.left),
                right = this.findMaxHeight(node.right);

            if (left > right) {
                return left + 1;
            } else {
                return right + 1;
            }
        }
    }

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1);
    }

    inOrder() {
        // DFS
        if (this.root === null) {
            return null;
        }

        let result = [];
        let traverseInOrder = (node) => {
            node.left && traverseInOrder(node.left);
            result.push(node.data);
            node.right && traverseInOrder(node.right);
        }
        
        traverseInOrder(this.root);
        return result;
    }

    preOrder() {
        // DFS
        if (this.root === null) {
            return null;
        }

        let result = [];
        let traversePreOrder = (node) => {
            result.push(node.data);
            node.left && traversePreOrder(node.left);
            node.right && traversePreOrder(node.right);
        }
        
        traversePreOrder(this.root);
        return result;
    }

    postOrder() {
        // DFS
        if (this.root === null) {
            return null;
        }

        let result = [];
        let traversePostOrder = (node) => {
            node.left && traversePostOrder(node.left);
            node.right && traversePostOrder(node.right);
            result.push(node.data);
        }
        
        traversePostOrder(this.root);
        return result;
    }

    levelOrder() {
        // BFS
        let result = [],
            Q = [];

        if (this.root !== null) {
            Q.push(this.root);
            while (Q.length > 0) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left !== null) {
                    Q.push(node.left);
                }
                if (node.right !== null) {
                    Q.push(node.right);
                }
            }
            return result;
        } else {
            return null;
        }
    }

    remove(data) {
        let removeNode = (node, data) => {
            if (node === null) {
                return null;
            }

            if (data === node.data) {
                if (node.left === null && node.right === null) {
                    return null;
                }
                if (node.left === null) {
                    return node.right;
                }
                if (node.right === null) {
                    return node.left;
                }

                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else if (data > node.data) {
                node.right = removeNode(node.right, data);
                return node;
            }
        };

        this.root = removeNode(this.root, data);
    }
}