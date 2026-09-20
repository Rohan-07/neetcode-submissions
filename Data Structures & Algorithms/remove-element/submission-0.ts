class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let k = 0;
        let start = 0;
        let end = nums.length - 1;
        
        while(start <= end){
            if(nums[start] !== val){
                start += 1;
                k += 1;
            } else {
                let itr = start;
                while(itr < end){
                    nums[itr] = nums[itr + 1];
                    itr += 1;
                }
                nums[itr] = val;
                end -= 1; 
            }
        }

        return k;
    }
}
