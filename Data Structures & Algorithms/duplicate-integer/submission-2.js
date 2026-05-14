class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();
        nums.forEach((e) => set.add(e));
        console.log(set)
        return set.size < nums.length
    }
}
