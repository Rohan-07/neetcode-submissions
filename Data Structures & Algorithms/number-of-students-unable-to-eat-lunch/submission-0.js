class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let stQueue = students;
        let sandSoFar = 0;
        

        while (sandSoFar !== sandwiches.length && sandwiches.length !== 0) {
            if (stQueue[0] === sandwiches[0]) {
                // remove from front.
                stQueue.shift();
                sandwiches.shift();
                sandSoFar = 0;
            } else {
                let removedElement = stQueue.shift();
                stQueue.push(removedElement);
                sandSoFar++;
            }
            // console.log("Sandwiches: ", sandwiches);
            // console.log("Stack: ", stQueue);
            // console.log("Sand So Far:", sandSoFar);
        }
        return !(sandwiches.length || stQueue.length) ? 0 : sandSoFar;
    }
}
