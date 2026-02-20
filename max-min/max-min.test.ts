import { sortDigitDescending } from "./max-min";

describe("sortDigitDescending", () => {
  test("should sort digits in descending order", () => {
    expect(sortDigitDescending(3008)).toBe(8300);
    expect(sortDigitDescending(1989)).toBe(9981);
    expect(sortDigitDescending(2679)).toBe(9762);
    expect(sortDigitDescending(9163)).toBe(9631);
  });

  test("should handle single digit number", () => {
    expect(sortDigitDescending(5)).toBe(5);
  });

  test("should handle repeated digits", () => {
    expect(sortDigitDescending(1112)).toBe(2111);
  });

  test("should handle number with zero", () => {
    expect(sortDigitDescending(1002)).toBe(2100);
  });
});