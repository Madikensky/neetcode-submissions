class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const newArr = []
        nums.forEach((e) => !newArr.includes(e) && newArr.push(e))
        return newArr.length < nums.length;
    }
}
