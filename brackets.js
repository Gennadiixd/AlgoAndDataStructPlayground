function bracketsChecker(n) {
    if (arguments.length - 1 !== n) {
        return false;
    }

    let isBalanced = (strOfBrackets) => {
        if (strOfBrackets.length % 2 !== 0) return false;
        let stack = [];
        let mask = {
            '(': ')',
            '[': ']',
            '{': '}',
        };

        for (let i = 0; i < strOfBrackets.length; i++) {
            if (
                strOfBrackets[i] === '('
                || strOfBrackets[i] === '{'
                || strOfBrackets[i] === '['
            ) {
                stack.push(strOfBrackets[i]);
            } else {
                if (!stack.length) return false;
                if (strOfBrackets[i] !== mask[stack.pop()]) {
                    return false
                }
            }
        }
        return true
    }

    for (let i = 1; i < arguments.length; i++) {
        console.log(isBalanced(arguments[i]));
    }
}
bracketsChecker(3, "{[()]}", "{[(])}", "{{[[(())]]}}");
