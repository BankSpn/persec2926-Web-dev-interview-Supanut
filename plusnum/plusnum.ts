/* ข้อที่ 6 */
export function tribonacci(signature: number[], n: number): number[] {
    if (n <= signature.length) {
        return signature.slice(0, n);
    }
    const result = [...signature];
    while (result.length < n) {
        const nextValue = result.slice(-3).reduce((acc, curr) => acc + curr, 0);
        result.push(nextValue);
    }

    return result;
}

console.log(tribonacci([1, 3, 5], 5));
console.log(tribonacci([2, 2, 2], 3));
console.log(tribonacci([10, 10, 10], 4));
console.log(tribonacci([1], 5));
console.log(tribonacci([], 3));