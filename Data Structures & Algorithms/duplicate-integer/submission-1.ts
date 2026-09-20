class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let sortedArray = nums.sort((a, b) => a - b);

        for (let idx = 0; idx < sortedArray.length - 1; idx++) {
            if (sortedArray[idx] === sortedArray[idx + 1]) 
                return true;
        }

        return false;
    }
}
