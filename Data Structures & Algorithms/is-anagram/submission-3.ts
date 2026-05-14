class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const obj = {};

        for (let j = 0; j < s.length; j++) {
            if (!obj[s[j]]) {
                obj[s[j]] = 1;
            } else {
                obj[s[j]]++;
            }
        }

        for (let k = 0; k < t.length; k++) {
            if (obj[t[k]] && obj[t[k]] > 0) {
                obj[t[k]]--;
            } else {
                return false;
            }
        }
        return true
    }
}
