import { tribonacci } from "./plusnum";

describe("tribonacci", () => {
  test("should generate tribonacci sequence correctly", () => {
    expect(tribonacci([1, 3, 5], 5)).toEqual([1, 3, 5, 9, 17]);
    expect(tribonacci([10, 10, 10], 4)).toEqual([10, 10, 10, 30]);
  });

  test("should return first n elements if n <= signature length", () => {
    expect(tribonacci([2, 2, 2], 3)).toEqual([2, 2, 2]);
    expect(tribonacci([1, 2, 3], 2)).toEqual([1, 2]);
  });

  test("should handle n = 0", () => {
    expect(tribonacci([1, 2, 3], 0)).toEqual([]);
  });

  test("should handle empty signature", () => {
    expect(tribonacci([], 3)).toEqual([0, 0, 0]);
  });

  test("should handle signature with less than 3 numbers", () => {
    expect(tribonacci([1], 5)).toEqual([1, 1, 2, 4, 7]);
    expect(tribonacci([1, 1], 5)).toEqual([1, 1, 2, 4, 7]);
  });
});