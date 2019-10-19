const Assert = require('./test.js')

class MyArray {
    constructor(...args) {
        this.length = 0
        if (args) {
            for (let i = 0; i < args.length; i++ , this.length++) {
                this[i] = args[i]
            }
        }
    }
    reindex() {
        const findSpace = () => {
            for (let i = 0; i < this.length; i++) {
                if (this[i] === undefined) {
                    return i
                }
            }
            return undefined
        }

        const findNearestValue = (index) => {
            for (let i = index; i < this.length; i++) {
                if (this[i] !== undefined) {
                    return i
                }
            }
            return undefined
        }

        let spaceIdx = findSpace();
        while (spaceIdx !== undefined) {
            let nearestValueIdx = findNearestValue(spaceIdx)
            if (nearestValueIdx !== undefined) {
                this[spaceIdx] = this[nearestValueIdx]
                delete this[nearestValueIdx]
            } else {
                this.length = spaceIdx
                delete this[spaceIdx]
            }
            spaceIdx = findSpace();
        }
    }

    push(...items) {
        for (let i = 0; i < items.length; i++) {
            this[this.length++] = items[i]
        }
        return this.length
    }

    pop() {
        if (this.length <= 0) return undefined;
        const number = this.length-- - 1
        const toBeReturned = this[number];
        delete this[number];
        return toBeReturned;
    }

    shift() {
        delete this[this.length-- - 1];
        this.reindex()
    }
}

let assert = new Assert(MyArray);

assert.run();