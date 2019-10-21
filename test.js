module.exports = class Assert {
    constructor(Arr) {
        this.Arr = Arr
    }

    run() {
        // this.assertCreate();
        // this.assertPush();
        // this.assertPop();
        // this.assertUnshift();
        // this.assertShift();
        // this.assertMap();
        this.assertConcat()
    }

    assertShift() {
        console.log('Assert Shift');
        console.group();
        let arr = new this.Arr('one', 'two', 'three');
        arr.shift();
        if (arr[0] !== 'two') {
            throw new Error(`first element shuld be two but have ${arr[0]}`);
        }
        if (arr.length !== 2) {
            throw new Error(`length should be 2 but have ${arr.length}`);
        }
        console.trace()
        console.log(`[V] passed`);
        console.groupEnd();
    }

    assertUnshift() {
        console.log('Assert Unshift');
        console.group();
        let arr = new this.Arr('one', 'two', 'three');
        let returned = arr.unshift('zero');
        if (arr[0] !== 'zero') {
            throw new Error(`first element shuld be zero but have ${arr[0]}`);
        }
        if (arr.length !== 4) {
            throw new Error(`length should be 4 but have ${arr.length}`);
        }
        if (returned !== 4) {
            throw new Error(`returned value should be 4 but have ${arr.length}`);
        }
        console.log(`[V] passed`);
        console.groupEnd();
    }

    assertCreate() {
        console.log('Assert Create');
        console.group();
        let arr = new this.Arr(1, 2, 3);
        if (arr.length !== 3) {
            throw new Error(`Length ${arr.length} shuld be 3`);
        }
        if (arr[2] !== 3) {
            throw new Error(`Third element ${arr[2]} shuld be 3`);
        }
        console.log(`[V] passed`);
        console.groupEnd();
    }

    assertReindex() {
        console.group();
        console.log('Reindex is deprecated');
        let arr = new this.Arr(1, undefined, 3);
        arr.reindex();
        if (arr.length !== 2) {
            throw new Error(`expected length 2, got length ${arr.length}`);
        }
        console.log(`[V] passed`);
        console.groupEnd();
    }

    assertPush() {
        console.log('Assert Push');
        console.group();
        let arr = new this.Arr();
        let lengthBefore = arr.length;
        let returned = arr.push('test');
        let lengthAfter = arr.length;
        if (returned !== arr.length) {
            throw new Error(`returned length ${returned} not equal actual length ${arr.length}`);
        }
        if (lengthAfter - lengthBefore !== 1) {
            throw new Error(`Length after = ${lengthAfter} Length before = ${lengthBefore}`);
        }
        if (arr[0] !== 'test') {
            throw new Error(`Wrong pushed element value ${arr[0]} shuld be test`);
        }
        returned = arr.push('test2', 'test3', 'test4');
        if (arr.length !== 4) {
            throw new Error(`Length ${arr.length} expected to be 4`);
        }
        console.log(`[V] passed`);
        console.groupEnd();
    }

    assertPop() {
        console.log('Assert Pop');
        console.group();
        let arr = new this.Arr();
        let returned = arr.pop();
        if (returned) {
            throw new Error(`should return undefined when popping empty array, returned ${returned}`)
        }
        arr.push('test');
        returned = arr.pop();
        let lengthBefore = arr.length;
        let lengthAfter = arr.length;
        if (returned !== 'test') {
            throw new Error(`${returned} expected to be 'test'`);
        }
        if (lengthBefore - lengthAfter === 1) {
            throw new Error(`Length after = ${lengthAfter} Length before = ${lengthBefore}`);
        }
        console.log(`[V] passed`);
        console.groupEnd();
    }

    assertFilter() {
        console.log('Assert Filter');
        console.group();
        let arr = new this.Arr(1, 7, 3, -4, 10, 7, 5);
        let arrCopy = {...arr}
        let filteredArr = arr.filter((el) => el > 5);
        if (filteredArr.length !== 3) {
            throw new Error(`filtered array length should be 3 but got ${filteredArr.length}`);
        }
        if (JSON.stringify(arrCopy) !== JSON.stringify(arr)) {
            throw new Error(`array ${arr} shuld be equal to ${arrCopy}`);

        }
        console.log(`[V] passed`);
        console.groupEnd();
    }

    assertMap() {
        console.log('Assert Map');
        console.group();
        let arr = new this.Arr(1, 7, 3, -4, 10, 7, 5);
        let arrCopy = {...arr}
        let mappedArr = arr.map((el, i, v) => {
            return el + 1
        });
        if (mappedArr[0] - arr[0] !== 1) {
            throw new Error(`expected ${arr[0]} shuld be greater at 1 than ${mappedArr[0]}`);
        }
        if (JSON.stringify(arrCopy) !== JSON.stringify(arr)) {
            throw new Error(`array ${arr} shuld be equal to ${arrCopy}`);
        }
        console.log(`[V] passed`);
        console.groupEnd();
    }

    assertEntries() {
        console.log('Assert Entries');
        console.group();
        let arr = new this.Arr('t', 'e', 's', 't');
        let arrIt = arr.entries()
        console.log(arrIt.next().value);
        console.log(arrIt.next().value);
        console.log(arrIt.next().value);

    }

    assertReduce() {
        console.log('Assert Reduce');
        console.group();
        let arr = new this.Arr(1, 2, 3, 10);
        console.log(arr.reduce(function (a, b) {
            return a + b;
        }));
    }

    assertConcat(){
        console.log('Assert Concat');
        console.group();
        let arr2 = new this.Arr('s', 'q', 't', 'y');
        let arr = new this.Arr(1, 2, 10);
        
        console.log(arr.concat(arr2));
        
    }

    assertFlat(){
        console.log('Assert Flat');
        console.group();
        let arr2 = new this.Arr(1, 2, 3, 10);
        let arr = new this.Arr(1, 2, arr2, 10);
        let arrToBeFlat = new this.Arr(22, 33, arr, 10);
        console.log(arrToBeFlat.flat());
        

    }
}
