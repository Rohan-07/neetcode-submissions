class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false;
        }

        let asciiArray = new Array(255);
        for(let idx=0; idx<asciiArray.length; idx++){
            asciiArray[idx] = 0;
        }
        
        for(let idx=0; idx<s.length; idx++){
            let ascii = s.charCodeAt(idx);
            asciiArray[ascii]+= 1;
        }
        
        for(let idx=0; idx<t.length; idx++){
            let ascii = t.charCodeAt(idx);
            asciiArray[ascii]-= 1;
        }

        for(let idx=0; idx<asciiArray.length; idx++){
            if(asciiArray[idx] !== 0){
                return false
            }
        }

        return true;
    }
}
