class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        let asciiMap = new Map<string, number>();
        for (const char of s) {
            let count = 0;
            if (asciiMap.has(char)) {
                count = asciiMap.get(char);
            }
            asciiMap.set(char, count + 1);
        }

        for (const char of t) {
            let count = 0;
            if (asciiMap.has(char)) {
                count = asciiMap.get(char);
            }
            asciiMap.set(char, count - 1);
        }

        for (const count of asciiMap.values()) {
            if (count !== 0) {
                return false;
            }
        }

        return true;
    }
}
