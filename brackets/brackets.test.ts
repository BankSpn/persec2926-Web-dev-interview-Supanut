import { isValidBrackets } from "./brackets";

describe("isValidBrackets", () => {
    test("should return true for valid brackets", () => {
        expect(isValidBrackets("()")).toBe(true);
        expect(isValidBrackets("([{}])")).toBe(true);
    });

    test("should return false for invalid brackets", () => {
        expect(isValidBrackets("([[)]]")).toBe(false);
        expect(isValidBrackets("([[{}]]]")).toBe(false);
        expect(isValidBrackets(")")).toBe(false);
        expect(isValidBrackets("(]}])")).toBe(false);
        expect(isValidBrackets("([)]")).toBe(false);
        expect(isValidBrackets("{")).toBe(false);
        expect(isValidBrackets("([]")).toBe(false);
    });

    test("should handle empty string", () => {
        expect(isValidBrackets("")).toBe(true);
    });

    test("should ignore non-bracket characters (if present)", () => {
        expect(isValidBrackets("(a)[b]{c}")).toBe(true);
        expect(isValidBrackets("(a][b)")).toBe(false);
    });
});