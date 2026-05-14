class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const obj = {};
        for (let i = 0; i < nums.length; i++) {
            const compliment = target - nums[i];
            if (obj[compliment] != undefined) {
                return [obj[compliment], i]
            }
            obj[nums[i]] = i;
        }
    }
}
