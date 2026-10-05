class MyStack {
    // Single Queue Implementation
    q: Array<number>;

    constructor() {
        this.q = new Array<number>();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.q.push(x);
    }

    /**
     * @return {number}
     */
    pop(): number {
        let result = 0;
        for (let i = 0; i < this.q.length; i++) {
            if (i === this.q.length - 1) {
                result = this.q.shift();
            } else {
                const val = this.q.shift();
                this.q.push(val);
            }
        }

        return result;
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.q[this.q.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.q.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
