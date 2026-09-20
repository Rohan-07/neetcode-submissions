class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let k = 0;
        let itr = 0;

        while(itr < nums.length) {
            if(nums[itr] != val){
                nums[k] = nums[itr];
                k += 1;
            }
            itr += 1;
        }

        return k;
    }
}
