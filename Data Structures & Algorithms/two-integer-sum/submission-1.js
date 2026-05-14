class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const obj = {}
        for (let i = 0; i < nums.length; i++) {
            const x = nums[i]
            if ((target-x) in obj) {
                return [obj[target-x],i]
            } else {
                obj[x] = i;
            }
        }
        return [] 
    }
}
