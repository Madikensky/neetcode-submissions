class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const arr = {};
        for (let n of nums) {
            if (arr[n]) {
                return true
            }
            arr[n] = 1;
        }
        return false;
    }
}
