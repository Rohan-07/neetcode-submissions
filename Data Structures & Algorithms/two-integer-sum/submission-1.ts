class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let hashMap = new Map<number, number>();
        for(let i=0; i<nums.length; i++){
            if(hashMap.has(target - nums[i])){
                return [i, hashMap.get(target - nums[i])]
            } else {
                hashMap.set(nums[i], i);
            }
        }
    }
}
