class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let actions = [];
        operations.forEach((operation) => {
            if(!isNaN(+operation)){
                actions.push(+operation);
            }
            else {
                if(operation === "+"){
                    let b = actions.pop();
                    let a = actions.pop();
                    let c = a + b;
                    actions.push(a);
                    actions.push(b);
                    actions.push(c);
                } else if(operation === "D"){
                    let m = actions.pop();
                    actions.push(m);
                    actions.push(2*m);
                } else {
                    actions.pop();
                }
            }
        })

        let result = 0;
        actions.forEach(action => result += action)
        
        return result;
    }
}
