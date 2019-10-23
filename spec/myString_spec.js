describe("MyString", () => {
    let myString;

    beforeEach(() => {
        myString = new MyString(' ', ' ', ' ', ' ', 'h', '.', 'e', ' ', 'l', '.', 'l', ' ', 'o', ' ', 'w', 'o', 'r', 'l', 'd', ' ', ' ')
    });

    describe("charCodeAt", () => {
        it("return code of char at index", () => {
            let code = myString.charCodeAt(4);
            expect(code).toEqual(104);
        });
    });

    describe("fromCharCode", () => {
        it("return string from codes", () => {
            let str = myString.fromCharCode(115, 116, 117);
            expect(str[0], str[1], str[2]).toEqual('s', 't', 'u');
        });
    });

    describe("concat", () => {
        it("return concatenated strings", () => {
            let concatenated = myString.concat('test');
            expect(concatenated).toEqual(new MyString(' ', ' ', ' ', ' ', 'h', '.', 'e', ' ', 'l', '.', 'l', ' ', 'o', ' ', 'w', 'o', 'r', 'l', 'd', ' ', ' ', 't', 'e', 's', 't'));
        });
    });

    describe("split", () => {
        it("return arrays from string", () => {
            let splitted = myString.split('.');
            expect(splitted[0]).toEqual(new MyString(' ', ' ', ' ', ' ', 'h'));
        });
        it("arrays quantity shuld be equal to separators in string plus one", () => {
            let splitted = myString.split('.');
            expect(splitted.length).toEqual(3);
        });
    });

    describe("charAt", () => {
        it("return characters at position", () => {
            let char = myString.charAt(4);
            expect(char).toEqual('h');
        });
    });

    describe("includes", () => {
        it("return boolean true or false if string contains substring", () => {
            let testString = new MyString('w', 'o')
            let isIncludes = myString.includes(testString);
            expect(isIncludes).toEqual(true);
        });
        it("return boolean true or false if string contains substring", () => {
            let testString = new MyString('w', 'o', 'w')
            let isIncludes = myString.includes(testString);
            expect(isIncludes).toEqual(false);
        });
    });

    describe("slice", () => {
        it("return new string based on previous", () => {
            let sliced = myString.slice(7, -5);
            expect(sliced).toEqual(new MyString(' ', 'l', '.', 'l', ' ', 'o', ' ', 'w', 'o'));
        });
        it("shuld not mutate original string", () => {
            let copy = new MyString(...myString)
            myString.slice(7, -5);
            expect(myString).toEqual(copy);
        });
    });

    describe("trim", () => {
        it("return string without spaces from start and end", () => {
            trimmed = myString.trim();
            expect(trimmed).toEqual(new MyString('h', '.', 'e', ' ', 'l', '.', 'l', ' ', 'o', ' ', 'w', 'o', 'r', 'l', 'd'));
        });
    });

    describe("valueOf", () => {
        it("return reguar string", () => {
            str = myString.valueOf();
            expect(str).toEqual('    h.e l.l o world  ');
        });
    });

    describe("lastIndexOf", () => {
        it("return last entry of character", () => {
            lastIdx = myString.lastIndexOf('o');
            expect(lastIdx).toEqual(15);
        });
        it("return -1 if character not exist in string", () => {
            lastIdx = myString.lastIndexOf('x');
            expect(lastIdx).toEqual(-1);
        });
    });

    describe("padEnd", () => {
        it("return string filled by another string n times", () => {
            padded = myString.padEnd(5, 'foo');
            expect(myString).toEqual(new MyString(' ', ' ', ' ', ' ', 'h', '.', 'e', ' ', 'l', '.', 'l', ' ', 'o', ' ', 'w', 'o', 'r', 'l', 'd', ' ', ' ', 'f', 'o', 'o', 'f', 'o'));
        });
    });

});
