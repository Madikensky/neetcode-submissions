class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const newArr = [...nums];
        nums.forEach((e) => newArr.push(e))
        return newArr
    }
}
