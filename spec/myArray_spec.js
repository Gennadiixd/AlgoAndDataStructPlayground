describe("MyArray", () => {
    console.log(MyArray);

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

    });

    describe("unshift", () => {

    });

    describe("filter", () => {

    });

    describe("map", () => {

    });

    describe("entries", () => {

    });

    describe("reduce", () => {

    });

    describe("concat", () => {

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
                if (flatArray[i] instanceof MyArray){
                    isFoundInstance = true
                    return;
                }
            }
            expect(isFoundInstance).toEqual(false);
        });
    });
});
