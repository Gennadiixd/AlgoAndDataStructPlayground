class MyString {
    constructor(...args) {
        this.length = 0;
        if (args) {
            for (let i = 0; i < args.length; i++ , this.length++) {
                this[i] = args[i];
            }
        }
    }

    static getValue(codeOrSymbol) {
        const uniCodeMap = {
            'a': 97,
            97: 'a',
            'b': 98,
            98: 'b',
            'c': 99,
            99: 'c',
            'd': 100,
            100: 'd',
            'e': 101,
            101: 'e',
            'f': 102,
            102: 'f',
            'g': 103,
            103: 'g',
            'h': 104,
            104: 'h',
            'i': 105,
            105: 'i',
            'j': 106,
            106: 'j',
            'k': 107,
            107: 'k',
            'l': 108,
            108: 'l',
            'm': 109,
            109: 'm',
            'n': 110,
            110: 'n',
            'o': 111,
            111: 'o',
            'p': 112,
            112: 'p',
            'q': 113,
            113: 'q',
            'r': 114,
            114: 'r',
            's': 115,
            115: 's',
            't': 116,
            116: 't',
            'u': 117,
            117: 'u',
            'v': 118,
            118: 'v',
            'w': 119,
            119: 'w',
            'x': 120,
            120: 'x',
            'y': 121,
            121: 'y',
            'z': 122,
            122: 'z',
            '{': 123,
            123: '{',
            '}': 125,
            125: '}',
            '(': 40,
            40: '(',
            ')': 41,
            41: ')',
        }
        return uniCodeMap[codeOrSymbol]
    }

    [Symbol.iterator]() {
        let length = this.length;
        let current = 0;
        let _this = this;

        return {
            next() {
                if (current === length) {
                    return {
                        done: true
                    }
                } else {
                    return {
                        done: false,
                        value: _this[current++]
                    }
                }
            }
        }
    }

    charCodeAt(index) {
        return this.constructor.getValue([this[index]]);
    }

    fromCharCode(...codes) {
        let pseudoString = [];
        for (let i = 0; i < codes.length; i++) {
            pseudoString.push(this.constructor.getValue([codes[i]]));
        }
        return new MyString(...pseudoString);
    }

    concat(str) {
        let newString = new MyString(...this, ...str);
        return newString;
    }

    split(separator) {
        let arr = [];
        let buffer = [];
        for (let i = 0; i < this.length; i++) {
            if(separator === ''){
                arr.push(new MyString(this[i]));
            } else if (this[i] !== separator) {
                buffer.push(this[i]);
            } else {
                arr.push(new MyString(...buffer));
                buffer = [];
            }
        }
        if (buffer.length) arr.push(new MyString(...buffer));
        return arr;
    }

}

let str = new MyString('h', '.', 'e', 'l', '.', 'l', 'o')
// console.log(str.fromCharCode(115, 116, 117));
// console.log(str.charCodeAt(2))
// console.log(str.concat('dddd'));
console.log(str.split('.'));

