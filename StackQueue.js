// cbf Queue
class Q {
    constructor(q = []) {
        this.q = q;
    }

    add(cbf, ...args) {
        this.q.push(() => cbf(...args));
    }

    execute() {
        this.q.forEach(cbf => cbf());
    }
}

const q = new Q();
q.add(console.log, 'first');
q.add(console.log, 'second');
q.add(console.log, 'third');
q.execute();

// cbf Stack
class Stack {
    constructor(stack = []) {
        this.stack = stack;
    }

    add(cbf, ...args) {
        this.stack.push(() => cbf(...args));
    }

    execute() {
        for (let i = this.stack.length - 1; i >= 0; i--) {
            this.stack[i]();
        }
    }

    do(){
        if(this.stack.length){
            this.stack[this.stack.length - 1]()
            this.stack.pop()
        } else {
            console.log(`${this.stack.length} <==== length of stack`);
        }
    }
}

const stack = new Stack();
stack.add(console.log, 'first');
stack.add(console.log, 'second');
stack.add(console.log, 'third');
stack.execute();

stack.add(console.log, 'first');
stack.do();
stack.add(console.log, 'second');
stack.add(console.log, 'third');
stack.do();
stack.add(console.log, 'fourth');
stack.do();
stack.do();