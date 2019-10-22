class MyString {
    constructor(...args) {
        this.length = 0
        if (args) {
            for (let i = 0; i < args.length; i++ , this.length++) {
                this[i] = args[i]
            }
        }
    }

    
}

module.exports = MyString;
