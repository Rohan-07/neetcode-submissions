class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        let curr = this.head;
        let prev = null;
        let currIdx = 0;

        while (curr !== null) {
            if (currIdx === index) {
                break;
            }
            prev = curr;
            curr = curr.next;
            currIdx++;
        }

        if (currIdx !== index) {
            return -1;
        }

        return prev;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let itr = this.head;
        let itrIdx = 0;

        while (itr !== null) {
            if (itrIdx === index) {
                break;
            }
            itrIdx++;
            itr = itr.next;
        }

        if (itr === null || itrIdx !== index) {
            return -1;
        }

        return itr.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let newNode = new ListNode();
        newNode.val = val;
        newNode.next = this.head;

        this.head = newNode;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        if (!this.head) {
            this.addAtHead(val);
            return;
        }
        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }

        let newNode = new ListNode();
        newNode.val = val;
        newNode.next = null;

        tail.next = newNode;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        let curr = this.head;
        let prev = null;
        let currIdx = 0;
        while (curr !== null) {
            if (currIdx === index) {
                break;
            }
            prev = curr;
            curr = curr.next;
            currIdx++;
        }

        if (currIdx !== index) {
            return;
        }

        let newNode = new ListNode();
        newNode.val = val;
        newNode.next = curr;

        if (prev) prev.next = newNode;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (!this.head) return;
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let curr = this.head;
        let prev = null;
        let currIdx = 0;

        while (curr !== null) {
            if (currIdx === index) {
                break;
            }
            prev = curr;
            curr = curr.next;
            currIdx++;
        }

        if (curr === null || currIdx !== index) {
            return;
        }

        prev.next = curr.next;
    }
}
