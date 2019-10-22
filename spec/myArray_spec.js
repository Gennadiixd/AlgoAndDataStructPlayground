describe("MyArray", () => {
    let myArray;

    beforeEach(() => {
        myArray = new MyArray(1, 2, 3);
    });

    describe("push", () => {
        it("length different by 1", () => {
            let lengthBefore = myArray.length;
            myArray.push('test');
            let lengthAfter = myArray.length;
            expect(lengthAfter - lengthBefore).toEqual(1);
        });
        it("return new length", () => {
            let returned = myArray.push('test');
            expect(returned).toEqual(4);
        });
        it("add new value on correct index", () => {
            myArray.push('test');
            expect(myArray[3]).toEqual('test');
        });
    });

    describe("pop", () => {
        it("returns correct length after pop", () => {
            myArray.pop();
            expect(myArray.length).toEqual(2);
        });
        it("returns correct value from pop", () => {
            myArray.push('test');
            returned = myArray.pop();
            expect(returned).toEqual('test');
        });
        it("length correctly decreased after pop", () => {
            let lengthBefore = myArray.length;
            returned = myArray.pop();
            let lengthAfter = myArray.length;
            expect(lengthBefore - lengthAfter).toEqual(1);
        });
    });

    describe("shift", () => {
        it("length correctly decreased after shift", () => {
            myArray.shift()
            expect(myArray.length).toEqual(2);
        });
        it("returns correct value", () => {
            let toBeReturned = myArray.shift()
            expect(toBeReturned).toEqual(1);
        });
    });

    describe("unshift", () => {
        it("returns new length", () => {
            let toBeReturned = myArray.unshift('three')
            expect(toBeReturned).toEqual(4);
        });
        it("increasing array values", () => {
            myArray.unshift('three')
            expect(myArray[0]).toEqual('three');
        });
    });

    describe("filter", () => {
        it("returns filtered elements", () => {
            let filteredArr = myArray.filter((el) => el > 2);
            expect(JSON.stringify(filteredArr)).toEqual(JSON.stringify({0: 3, length: 1}));
        });
        it("does not mutate original strucuture", () => {
            arrayBefore = JSON.stringify(myArray)
            myArray.filter((el) => el > 2);
            expect(JSON.stringify(myArray)).toEqual(arrayBefore);
        });
    });

    describe("map", () => {
        it("returns morped aaray as to cbf", () => {
            let mapped = myArray.map(el => el + 1)
            expect(mapped[0]).toEqual(2);
        });
        it("does not mutate original strucuture", () => {
            arrayBefore = JSON.stringify(myArray)
            myArray.map(el => el + 1)
            expect(JSON.stringify(myArray)).toEqual(arrayBefore);
        });
    });

    describe("entries", () => {
        it("returns arrays with key and value", () => {
            let keysValues = myArray.entries().next().value
            expect(JSON.stringify(keysValues)).toEqual(JSON.stringify([0, 1]));
        });
        it("shuld not return more than array consists of", () => {
            let arrEntries = myArray.entries()
            arrEntries.next().value
            arrEntries.next().value
            let isDone = arrEntries.next().done
            expect(isDone).toEqual(true);
        });
        it("shuld return correct last value", () => {
            let arrEntries = myArray.entries()
            arrEntries.next().value
            arrEntries.next().value
            let lastVaule = arrEntries.next().value
            expect(lastVaule).toEqual([2, 3]);
        });
    });

    describe("reduce", () => {
        it("shuld accumulated values", () => {
            let toBeReturned = myArray.reduce((a, b) => a + b)
            expect(toBeReturned).toEqual(6);
        });
        it("shuld accumulated values with init value 10", () => {
            let toBeReturned = myArray.reduce((a, b) => {
                return a + b
            }, 10)
            expect(toBeReturned).toEqual(16);
        });
    });

    describe("concat", () => {
        it("returns concatenated strucuture of both arrays", () => {
            let toBeReturned = myArray.concat(myArray)
            expect(toBeReturned.length).toEqual(myArray.length * 2);
        });
        it("does not mutate original strucuture", () => {
            arrayBefore = JSON.stringify(myArray)
            myArray.concat(myArray)
            expect(JSON.stringify(myArray)).toEqual(arrayBefore);
        });
    });

    describe("flat", () => {
        it("length shuld be equal to sum of both arrays length", () => {
            let arrToBeFlat = new MyArray(22, 33, myArray, 10);
            let lengthBefore = arrToBeFlat.length;
            let flatArray = arrToBeFlat.flat();
            expect(flatArray.length).toEqual(lengthBefore - 1 + myArray.length);
        });
        it("every item shuld not be instanceof MyArray", () => {
            let arrToBeFlat = new MyArray(22, 33, myArray, 10);
            let flatArray = arrToBeFlat.flat();
            let isFoundInstance = false
            for (let i = 0; i < flatArray.length; i++) {
                if (flatArray[i] instanceof MyArray) {
                    isFoundInstance = true
                    return;
                }
            }
            expect(isFoundInstance).toEqual(false);
        });
    });
});
