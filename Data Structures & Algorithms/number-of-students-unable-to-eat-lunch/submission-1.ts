class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        // Count how many students want each sandwich type
        const count = [0, 0];
        for (let student of students) {
            count[student]++;
        }

        // Process sandwiches in order (from stack)
        for (let sandwich of sandwiches) {
            if (count[sandwich] > 0) {
                // Someone wants this sandwich
                count[sandwich]--;
            } else {
                // No one wants this sandwich - stuck!
                // Return how many students are left
                return count[0] + count[1];
            }
        }

        return 0; // All students ate
    }
}
