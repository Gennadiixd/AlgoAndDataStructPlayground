class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyQueue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    add(value) {
        let newNode = new Node(value);
        if (!this.last) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
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
        return temp;
    }
}

let myQ = new MyQueue()
myQ.add(1)
myQ.add(2)
myQ.add(3)
myQ.add(4)
myQ.add(5)

console.log(myQ.get());
console.log(myQ.get());
console.log(myQ.get());
console.log(myQ.get());
console.log(myQ.get());
console.log(myQ.get());