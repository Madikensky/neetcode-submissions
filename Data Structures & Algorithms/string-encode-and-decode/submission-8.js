class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (!strs.length) {
            // console.log(strs)
            strs.push('empty')
        }
        return strs.join('#0')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.includes('empty')) return []
        return str.split('#0')
    }
}
