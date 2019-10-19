const Assert = require('./test.js')

class MyArray {
    constructor(...args) {
        this.length = 0
        if (args) {
            for (let i = 0; i < args.length; i++ ,this.length++) {
                this[i] = args[i]
            }
        }
    }

    reindex() {
        console.warn("Method reindex is deprecated! =)")
        const findSpaceIdx = () => {
            for (let i = 0; i < this.length; i++) {
                if (this[i] === undefined) {
                    return i
                }
            }
            return undefined
        }

        const findNearestValueIdx = (index) => {
            for (let i = index; i < this.length; i++) {
                if (this[i] !== undefined) {
                    return i
                }
            }
            return undefined
        }

        let spaceIdx = findSpaceIdx();
        while (spaceIdx !== undefined) {
            let nearestValueIdx = findNearestValueIdx(spaceIdx)
            if (nearestValueIdx !== undefined) {
                this[spaceIdx] = this[nearestValueIdx]
                delete this[nearestValueIdx]
            } else {
                this.length = spaceIdx
                delete this[spaceIdx]
            }
            spaceIdx = findSpaceIdx();
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
        const offsetLeft = () => {
            for (let i = 0; i < this.length; i++) {
                this[i] = this[i + 1];
            }
            delete this[this.length-- -1]
        }
        const toBeReturned = this[0];
        delete this[0];
        offsetLeft();
        return toBeReturned;
    }

    unshift(item) {
        const offsetRight = () => {
            if (this.length) {
                for (let i = this.length; i > 0; i--) {
                    this[i] = this[i - 1]
                }
                this.length++
            }
        }
        offsetRight()
        this[0] = item
        return this.length
    }
}

let assert = new Assert(MyArray);

assert.run();