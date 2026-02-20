import { autocomplete } from "./search";

describe("autocomplete", () => {
    test("should return matched items limited by maxResult", () => {
        const result = autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2);
        expect(result).toEqual(["Think", "Mother"]);
    });

    test("should be case-insensitive", () => {
        expect(autocomplete("TH", ["Mother", "Think", "Worthy"], 3)).toEqual(["Think", "Mother", "Worthy"]);
    });

    test("should return empty array if no match", () => {
        expect(autocomplete("zz", ["Mother", "Think"], 5)).toEqual([]);
    });

    test("should handle maxResult bigger than matches", () => {
        expect(autocomplete("a", ["Apple", "Android"], 10)).toEqual(["Android", "Apple"]);
    });
});