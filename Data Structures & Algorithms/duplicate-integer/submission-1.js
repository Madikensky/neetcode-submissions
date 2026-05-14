class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            let count = 0;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    count++;
                    console.log(nums[i], nums[j])
                }
            }
            if (count >= 1) return true;
        }
        return false
    }
}
