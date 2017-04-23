function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

var LL = new LinkedList();
var Q = new LinkedList();

console.log(LL);
console.log(Q);
