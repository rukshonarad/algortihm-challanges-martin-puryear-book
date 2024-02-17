//  SList: Split on Value Create splitOnVal(list,num) that, given number, splits a list in two. The latter half of the list should be returned, starting with node containing num. E.g.: splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3), and the return value will be (5=>2=>4).

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function splitOnVal(list, num) {
    let current = list;
    let prev = null;

    // Traverse the list to find the node containing the given number
    while (current !== null && current.data !== num) {
        prev = current;
        current = current.next;
    }

    // If the number is not found, return null
    if (current === null) {
        return null;
    }

    // Update the previous node's next pointer to null to split the list
    if (prev !== null) {
        prev.next = null;
    }

    // Return the head of the latter half of the list
    return current;
}

// Example usage
// Creating the original linked list
let head = new ListNode(1);
head.next = new ListNode(3);
head.next.next = new ListNode(5);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(4);

// Calling the function to split the list
let num = 5;
let latterHalf = splitOnVal(head, num);

// Printing the original list and the latter half
console.log("Original list:");
let current = head;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}

console.log("Latter half of the list starting with", num + ":");
current = latterHalf;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}
