//Doubly Linked List

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Adds a node at the end
    //Time complexity - O(1)
    push(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //Removes a node from the end
    //Time complexity - O(1)
    pop(){
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    //Removes a node from the beginnin
    //Time complexity - O(1)
    shift(){
        if(this.length === 0) return undefined;
        let oldhead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldhead.next;
            this.head.prev = null;
            oldhead.next = null;
        }
        this.length--;
        return oldhead;
    }

    //Adds a node at the beginning
    //Time complexity - O(1)
    unshift(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //Retrieve the value at the index position
    //Time complexity - O(n)
    get(index){
        if(index < 0 || index >= this.length) return null;
        let count, current;
        if(index <= this.length / 2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    //Sets the value at the index position
    //Time complexity - O(n)
    set(index, val){
        let foundNode = this.get(index);
        if(foundNode !== null){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    //Inserts a node at a specific position
    //Time complexity - O(n)
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }

    //Removes the node at a specific position
    //Time complexity - O(n)
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let removedNode = this.get(index);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.prev = null;
        removedNode.next = null;

        this.length--;
        return removedNode;
    }

    //Reverses the linked list
    //Time complexity - O(n)
    reverse() {
        if (this.length === 1) return this;
        [this.head, this.tail] = [this.tail, this.head];
        let current = this.head;
        while (current) {
            [current.prev, current.next] = [current.next, current.prev];
            current = current.next;
        }
        return this;
    }
}


