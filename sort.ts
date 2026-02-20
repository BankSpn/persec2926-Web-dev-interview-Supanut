/* ข้อที่ 2 */
function sortData(items: string[]): string[] {
    return [...items].sort((a: string, b: string) => {
        return a.localeCompare(b, undefined, { 
            numeric: true,
            sensitivity: 'base'
        });
    });
}

const example1: string[] = ["TH19", "SG20", "TH2"];
const result1 = sortData(example1);
console.log("Example 1:", result1); 

const example2: string[] = ["TH10", "TH3Netflix", "TH1", "TH7"];
const result2 = sortData(example2);
console.log("Example 2:", result2); 