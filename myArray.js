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
            delete this[--this.length]
        }
        const toBeReturned = this[0];
        delete this[0];
        offsetLeft();
        return toBeReturned;
    }

    unshift(...items) {
        const offsetRight = (length) => {
            if (!length) length = 0;
            if (this.length) {
                for (let i = this.length; i > 0; i--) {
                    this[i + length] = this[i - 1];
                }
                this.length++
            }
        }
        for (let i = 0; i < items.length; i++) {
            offsetRight();
            this[i] = items[i];
        }
        return this.length;
    }

    filter(cbf) {
        let copiedArr = {...this}
        let filteredArr = new MyArray()
        for (let i = 0; i < this.length; i++) {
            if (cbf(this[i], i, copiedArr)) {
                filteredArr.push(this[i])
            }
        }
        return filteredArr
    }

    map(cbf) {
        let copiedArr = {...this}
        let mapedArr = new MyArray()
        for (let i = 0; i < this.length; i++) {
            mapedArr.push(cbf(this[i], i, copiedArr))
        }
        return mapedArr
    }

    indexOf(searchElement) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === searchElement) {
                return i
            }
        }
        return -1
    }

    concat(arr) {
        return [...this, ...arr]
    }

    from(iterable) {
        let newArr = new MyArray()
        iterable.forEach(el => newArr.push(el))
        return newArr
    }

    entries() {
        let _this = this
        return function* () {
            for (let i = 0; i < _this.length; i++) {
                if (i === _this.length - 1) {
                    return [i, _this[i]]
                }
                yield [i, _this[i]]
            }
        }()
    }

    every(cbf) {
        let copiedArr = {...this}
        for (let i = 0; i < this.length; i++) {
            if (!cbf(this[i], i, copiedArr)) {
                return false
            }
        }
        return true
    }

    reduce(cbf, initValue) {
        let accumulator = initValue || 0;
        for (let i = this.length - 1; i >= 0; i--) {
            accumulator = cbf(accumulator, this[i])
        }
        return accumulator
    }

    flat(depth) {
        if(!depth) depth = Infinity
        let flatArray = new MyArray()
        
        let flatHelper = (arr) => {
            --depth
            if (depth < -1){
                flatArray.push(arr)
                return
            }

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] instanceof MyArray) {
                    flatHelper(arr[i])
                } else {
                    flatArray.push(arr[i])
                }
            }
        }
        flatHelper(this)
        return flatArray
    }
}

let assert = new Assert(MyArray);

assert.run();