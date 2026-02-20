/* ข้อที่ 4 */
const romanMapping: { [key: string]: number } = {
    M: 1000, CM: 900, D: 500, CD: 400,
    C: 100, XC: 90, L: 50, XL: 40,
    X: 10, IX: 9, V: 5, IV: 4, I: 1
};

export function intToRoman(num: number): string {
    let result = '';

    for (const key in romanMapping) {
        while (num >= romanMapping[key]) {
            result += key;
            num -= romanMapping[key];
        }
    }
    return result;
}

export function romanToInt(s: string): number {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMapping[s[i]];
        const nextVal = romanMapping[s[i + 1]];

        if (nextVal && currentVal < nextVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }
    return total;
}

console.log("1989 =>", intToRoman(1989));
console.log("2000 =>", intToRoman(2000));
console.log("68   =>", intToRoman(68));
console.log("109  =>", intToRoman(109));

console.log("---");

console.log("MCMLXXXIX =>", romanToInt("MCMLXXXIX"));
console.log("MM        =>", romanToInt("MM"));
console.log("LXVIII    =>", romanToInt("LXVIII"));
console.log("CIX       =>", romanToInt("CIX"));