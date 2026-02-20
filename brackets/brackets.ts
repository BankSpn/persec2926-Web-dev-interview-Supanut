/* ข้อที่ 1 */
export function isValidBrackets(str: string): boolean {
    const stack: string[] = [];

    const pairs: { [key: string]: string } = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const char of str) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }
        else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0) {
                return false;
            }

            const top = stack.pop();
            if (top !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
console.log(isValidBrackets("()"));
console.log(isValidBrackets("([[)]]"));
console.log(isValidBrackets("([{}])"));
console.log(isValidBrackets("([[{}]]]"));
console.log(isValidBrackets(")"));
console.log(isValidBrackets("(]}])"));
console.log(isValidBrackets("([)]"));
console.log(isValidBrackets("{"));