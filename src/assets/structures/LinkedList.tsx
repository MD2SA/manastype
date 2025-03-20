export class LinkedNode {

    value: string;
    next: LinkedNode | null;

    constructor(value: string, next: LinkedNode | null = null) {
        this.value = value;
        this.next = next;
    }

}

export class LinkedList {

    head: LinkedNode | null;
    last: LinkedNode | null;

    constructor() {
        this.head = null;
        this.last = null;
    }

    getFirst(): string {
        return this.head?.value ?? "";
    }

    append(value: string) {
        const newNode = new LinkedNode(value);
        if (!this.head || !this.last) {
            this.head = newNode;
            this.last = newNode;
            return;
        }
        this.last.next = newNode;
        this.last = this.last.next;
    }

    removeFirst() {
        if (this.head == null) {
            return;
        } else if (this.head === this.last) {
            this.head = null;
            this.last = null;
        } else {
            this.head = this.head.next;
        }
    }

    toArray(): string[] {
        let array: string[] = [];
        let tmp = this.head;
        while ( tmp !== null) {
            array.push(tmp.value);
            tmp = tmp.next;
        }
        return array;
    }
}
