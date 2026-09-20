class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if(s.length === 1){
            return false;
        }
        
        let charIdx = 0;
        let brackets:string[] = [];
        
        while(charIdx < s.length){
            if(s[charIdx] === "(" || s[charIdx] === "[" || s[charIdx] === "{"){
                brackets.push(s[charIdx]);
            } else {
                let top = brackets[brackets.length - 1];
                if(s[charIdx] === ")" && top === "("){
                    brackets.pop();
                }
                else if(s[charIdx] === "]" && top === "["){
                    brackets.pop();
                }
                else if(s[charIdx] === "}" && top === "{"){
                    brackets.pop();
                } else {
                    return false;
                }
            }
            charIdx += 1;
        }

        return brackets.length ? false : true;
    }
}
