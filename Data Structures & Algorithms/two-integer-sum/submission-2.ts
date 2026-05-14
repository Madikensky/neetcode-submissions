class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let i = 0;
        let j = nums.length - 1;
        while (i <= j) {
            if (i == j) {
                i++;
                j = nums.length - 1;
            }
            if (nums[i] + nums[j]==target) return [i,j]
            j--;
        }
    }
}
