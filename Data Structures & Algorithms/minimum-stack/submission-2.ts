class MinStack {
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    
    stack = [];
    currentMin = Infinity;
    minStack = [];

    push(val: number): void {
        this.currentMin = Math.min(val, this.currentMin);
        this.stack.push(val);
        this.minStack.push(this.currentMin);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.minStack.pop();
        this.currentMin = this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : Infinity;
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.currentMin;
    }
}
