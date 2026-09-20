class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let itr = arr.length - 1;
        let maxSoFar = arr[arr.length - 1];
        arr[arr.length - 1] = -1;
        itr--;

        while(itr >= 0){
            let currVal = arr[itr];
            arr[itr] = maxSoFar;
            maxSoFar = Math.max(maxSoFar, currVal);
            itr--;
        }

        return arr;
    }
}
