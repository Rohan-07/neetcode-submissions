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
            if(nums[idxCurr] === 1){
                tempCount += 1;
            } else {
                result = Math.max(tempCount, result);
                tempCount = 0;
            }
            idxCurr += 1;
        }
        result = Math.max(tempCount, result);
        return result;
    }
}
