class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        nums.sort((a, b) => a - b);

        for (let idx = 0; idx < nums.length - 1; idx++) {
            if (nums[idx] === nums[idx + 1]) 
                return true;
        }

        return false;
    }
}
