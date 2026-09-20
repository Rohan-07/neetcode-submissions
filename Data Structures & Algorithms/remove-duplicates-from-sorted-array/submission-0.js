class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let lpointer = 0;
        let i = 1;

        while(i < nums.length){
            if(nums[i-1] !== nums[i]){
                lpointer++;
                nums[lpointer] = nums[i];
            }
            i++;
        }

        return lpointer + 1;
    }
}
