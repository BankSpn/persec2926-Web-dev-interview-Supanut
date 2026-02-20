/* ข้อที่ 5 */
export function sortDigitDescending(num: number): number {
    const sortedStr = num
        .toString()
        .split('')
        .sort((a, b) => parseInt(b) - parseInt(a))
        .join('');

    return parseInt(sortedStr);
}
console.log(sortDigitDescending(3008));
console.log(sortDigitDescending(1989));
console.log(sortDigitDescending(2679));
console.log(sortDigitDescending(9163));