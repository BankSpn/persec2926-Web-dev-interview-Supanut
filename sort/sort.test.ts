import { sortData } from "./sort";

describe("sortData", () => {
    test("should sort alphanumeric values using numeric order", () => {
        expect(sortData(["TH19", "SG20", "TH2"])).toEqual(["SG20", "TH2", "TH19"]);
    });

    test("should sort strings with numbers inside correctly", () => {
        expect(sortData(["TH10", "TH3Netflix", "TH1", "TH7"])).toEqual([
            "TH1",
            "TH3Netflix",
            "TH7",
            "TH10",
        ]);
    });

    test("should be case-insensitive", () => {
        expect(sortData(["th2", "TH10", "Th1"])).toEqual(["Th1", "th2", "TH10"]);
    });

    test("should not mutate original array", () => {
        const arr = ["TH2", "TH1"];
        const sorted = sortData(arr);
        expect(arr).toEqual(["TH2", "TH1"]);
        expect(sorted).toEqual(["TH1", "TH2"]);
    });
});