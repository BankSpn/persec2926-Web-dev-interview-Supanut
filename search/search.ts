/* ข้อที่ 3 */
export function autocomplete(search: string, items: string[], maxResult: number): string[] {
    const query = search.toLowerCase();
    const filteredItems = items.filter(item => 
        item.toLowerCase().includes(query)
    );
    filteredItems.sort((a, b) => {
        const indexA = a.toLowerCase().indexOf(query);
        const indexB = b.toLowerCase().indexOf(query);
        if (indexA !== indexB) {
            return indexA - indexB;
        }
        return a.localeCompare(b);
    });
    return filteredItems.slice(0, maxResult);
}
const result = autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2);

console.log(result); 
