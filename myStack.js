class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyStack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    add(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.length;
    }

    get() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return temp.value;
    }
}

let myStack = new MyStack()
myStack.add(1)
myStack.add(2)
myStack.add(3)
myStack.add(4)
myStack.add(5)

console.log(myStack.get());
console.log(myStack.get());
console.log(myStack.get());
console.log(myStack.get());
console.log(myStack.get());
console.log(myStack.get());