class myArray {
    constructor(length = 0) {
        this.length = length
        this.data = {}
    }

    push(item) {
        this.data[this.length++] = item
        return this.length
    }

    pop() {
        const number = this.length-- - 1
        const toBeReturned = this.data[number];
        const removeItem = (prop) => ({[prop]: _, ...rest}) => rest;
        this.data = removeItem(number)(this.data);
        return toBeReturned;
    }
}

let myArr = new myArray();
myArr.push(3)
myArr.push(4)
myArr.push(4)

console.log(myArr.pop());
myArr.push(3)
console.log(myArr.pop());
console.log(myArr.pop());

