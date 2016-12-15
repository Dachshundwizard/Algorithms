function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.previous = prev;
}

LinkedList.prototype.addToHead = function(value) { // Method attached called 'addToHead', and the value is same as value of 'newNode'
    var newNode = new Node(value, this.head, null); // Created 'newNode' with our Node constructor function. We set value property to be same as the perameter within function. We set 'next' to be the head of the node that is already in the list. Or it will be null if we have no nodes already existing. We set 'prev' to be null because there will be no nodes previous to it.
    if(this.head) this.head.prev = newNode; // If there are nodes already present, then there will be a this.head. Set the prev pointer to now reference the newNode head.
    else this.tail = newNode; // Because there are no other nodes, it will be both the head and tail
    this.head = newNode; // Whether or not there were prior nodes, we want our newNode to be the new head.
}; // Whenever we use "this", it is always referencing our LinkedList constructor function.

var ll = new LinkedList();

ll.addToHead(100); // Here we are adding one node to our LinkedList. Right now it is both the head and tail node.
ll.addToHead(200);
ll.addToHead(300);
console.log(ll);





// var LL = new LinkedList();
// var node1 = new Node(100, 'node2', null);
// // console.log(LL);
// console.log(node1);
