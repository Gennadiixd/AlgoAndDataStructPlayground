module.exports = class Assert {
    constructor(Arr){
        this.Arr = Arr
    }

    run(){
        this.assertCreate();
        this.assertPush();
        this.assertPop();
        this.assertReindex();
    }

    assertCreate(){
        console.log('Assert Create');
        let arr = new this.Arr(1,2,3);
        if (arr.length !==3){
            throw new Error(`Length ${arr.length} shuld be 3`);
        }
        if (arr[2] !== 3) {
            throw new Error(`Third element ${arr[2]} shuld be 3`);
        }
        console.log(`Test ===> creation <=== passed`);
    }

    assertReindex() {
        console.log('Assert Reindex');
        let arr = new this.Arr(1, undefined, 3);
        arr.reindex();
        if (arr.length !== 2){
            throw new Error(`expected length 2, got length ${arr.length}`);
        }
        
        console.log(`Test ===> reindex <=== passed`);
    }

    assertPush(){
        console.log('Assert Push');
        let arr = new this.Arr();
        let lengthBefore = arr.length;
        let returned = arr.push('test');
        let lengthAfter = arr.length;
        if (returned !== arr.length){
            throw new Error(`returned length ${returned} not equal actual length ${arr.length}`);
        }
        if (lengthAfter - lengthBefore  !== 1){
            throw new Error(`Length after = ${lengthAfter} Length before = ${lengthBefore}`);
        }
        if (arr[0] !== 'test'){
            throw new Error(`Wrong pushed element value ${arr[0]} shuld be test`);
        }
        returned = arr.push('test2', 'test3', 'test4');
        if (arr.length !== 4){
            throw new Error(`Length ${arr.length} expected to be 4`);
        }
        console.log(`Test ===> push <=== passed`);
    }

    assertPop(){
        console.log('Assert Pop');
        let arr = new this.Arr();
        let returned = arr.pop();
        if (returned){
            throw new Error(`should return undefined when popping empty array, returned ${returned}`)
        }
        arr.push('test');
        returned = arr.pop();
        let lengthBefore = arr.length;
        let lengthAfter = arr.length;
        if(returned !== 'test'){
            throw new Error(`${returned} expected to be 'test'`);
        }
        if (lengthBefore - lengthAfter === 1) {
            throw new Error(`Length after = ${lengthAfter} Length before = ${lengthBefore}`);
        }
        console.log(`Test ===> pop <=== passed`);
    }
}
