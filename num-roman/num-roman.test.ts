import { intToRoman, romanToInt } from "./num-roman";

describe("Roman numeral conversion", () => {
  test("intToRoman should convert int to roman correctly", () => {
    expect(intToRoman(1989)).toBe("MCMLXXXIX");
    expect(intToRoman(2000)).toBe("MM");
    expect(intToRoman(68)).toBe("LXVIII");
    expect(intToRoman(109)).toBe("CIX");
  });

  test("romanToInt should convert roman to int correctly", () => {
    expect(romanToInt("MCMLXXXIX")).toBe(1989);
    expect(romanToInt("MM")).toBe(2000);
    expect(romanToInt("LXVIII")).toBe(68);
    expect(romanToInt("CIX")).toBe(109);
  });

  test("should be reversible for common values", () => {
    const values = [1, 4, 9, 14, 40, 44, 58, 90, 99, 400, 944, 3999];
    for (const v of values) {
      expect(romanToInt(intToRoman(v))).toBe(v);
    }
  });
});