//Binary Search Tree

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    //Adds a node in the Binary Search Tree
    //Time complexity - O(log n)
    insert(val){
        let newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(val === current.val) return undefined;
            if(val < current.val){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    //Checks if the value exists in the Binary Search Tree
    //Time complexity - O(log n)
    find(val){
        if(this.root === null) return false;
        let current = this.root;
        let found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left;
            } else if(val > current.right){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }


    //Tree Traversal Algorithms

    //Breadth First Search
    breadthFirstSearch(){
        let node = this.root;
        let queue = [];
        let data = [];

        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    //Depth First Search PreOrder
    DFSPreOrder(){
        let data = [];
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    //Depth First Search PostOrder
    DFSPostOrder(){
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }

    //Depth First Search InOrder
    DFSInOrder(){
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}


