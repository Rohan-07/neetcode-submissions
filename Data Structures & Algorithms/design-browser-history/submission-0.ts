class Page {
    url: string;
    next: Page | null;
    previous: Page | null;

    constructor(url: string) {
        this.url = url;
        this.next = null;
        this.previous = null;
    }
}

class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    head: Page | null;
    constructor(homepage) {
        const page = new Page(homepage);
        this.head = page;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        if (!this.head) {
            this.head = new Page(url);
        } else {
            const page = new Page(url);
            page.previous = this.head;
            this.head.next = page;
            this.head = page;
        }
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        if (!this.head) {
            return null;
        }

        while (steps && this.head.previous) {
            this.head = this.head.previous;
            steps--;
        }

        return this.head.url;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        if (!this.head) {
            return null;
        }

        while (steps && this.head.next) {
            this.head = this.head.next;
            steps--;
        }

        return this.head.url;
    }
}
