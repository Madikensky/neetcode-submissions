class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hmap = {};
        for (let word = 0; word < strs.length; word++) {
            const obj = {};
            for (let char = 0; char < strs[word].length; char++) {
                if (obj[strs[word][char]]) {
                    obj[strs[word][char]]++;
                } else {
                    obj[strs[word][char]] = 1;
                }
            }
            const formatted = Object.entries(obj).sort().join('')
            if (hmap[formatted]) {
                hmap[formatted].push(strs[word]);
            } else {
                hmap[formatted] = [strs[word]]
            }
        }
        return (Object.values(hmap))
    }
}
