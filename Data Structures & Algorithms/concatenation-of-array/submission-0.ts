class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let n = nums.length;
        let ans = new Array(2*n);

        nums.forEach((num, idx) => {
            ans[idx] = num;
            ans[idx+n] = num;
        })

        return ans;
    }
}
