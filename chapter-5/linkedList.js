class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const getLastValue = (head) => {
    if (!head) {
        return null;
    }

    let current = head;

    while (current.next !== null) {
        current = current.next;
    }

    return current.data;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

const lastValue = getLastValue(head);
console.log("Last value in the list:", lastValue); // This will print "Last value in the list: 3"
