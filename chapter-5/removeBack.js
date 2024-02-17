class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function removeLastNode(head) {
    if (!head) {
        return null;
    }

    if (!head.next) {
        return null;
    }

    let current = head;
    let prev = null;

    while (current.next !== null) {
        prev = current;
        current = current.next;
    }

    prev.next = null;

    return head;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

const newHead = removeLastNode(head);

let current = newHead;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}
