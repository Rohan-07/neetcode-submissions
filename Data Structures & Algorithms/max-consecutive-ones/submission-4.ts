class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let result: number = 0;
        let tempCount = 0;

        if(nums.length === 1){
            return nums[0] === 1 ?  1 : 0;
        }

        let idxCurr = 0;

        while(idxCurr < nums.length){
            nums[idxCurr] === 1 ? tempCount += 1 : tempCount = 0;
            result = Math.max(tempCount, result);
            idxCurr += 1;
        }
        return result;
    }
}
