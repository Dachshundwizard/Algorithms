function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) { // Method attached called 'addToHead', and the value is same as value of 'newNode'
    var newNode = new Node(value, this.head, null); // Created 'newNode' with our Node constructor function. We set value property to be same as the perameter within function. We set 'next' to be the head of the node that is already in the list. Or it will be null if we have no nodes already existing. We set 'prev' to be null because there will be no nodes previous to it.
    if(this.head) this.head.prev = newNode; // If there are nodes already present, then there will be a this.head. Set the prev pointer to now reference the newNode head.
    else this.tail = newNode; // Because there are no other nodes, it will be both the head and tail
    this.head = newNode; // Whether or not there were prior nodes, we want our newNode to be the new head.
}; // Whenever we use "this", it is always referencing our LinkedList constructor function.

LinkedList.prototype.addToTail = function(value) {
    var newNode = new Node(value, null, this.tail); // There will NOT be a 'next' perameter so it is NULL.
    if(this.tail) this.tail.next = newNode;
    else this.head = newNode; // If it is the only node in list, it will be both head and tail
    this.tail = newNode;
};

LinkedList.prototype.removeHead = function() { // This does not take any perameters
    if(!this.head) return null; // If the LinkedList IS empty.
    var val = this.head.value; // We are saving the head value in a variable. And then set the new head
    this.head = this.head.next; // We are changing the head node to point at the next node, which is after the one we removed/saved as a variable.
    if(this.head) this.head.prev = null; // If there is a head present now, set its previous property to null.
    else this.tail = null; // If there is no head present now/ is empty
    return val;
};

LinkedList.prototype.removeTail = function() { // This will not take any perameters
    if(!this.tail) return null;
    var val = this.tail.value;
    this.tail = this.tail.prev;
    if(this.tail) this.tail.next = null;
    else this.head = null;
    return val;
};

LinkedList.prototype.search = function(searchValue){ // Take a given peice of data, and see if it resides in the LinkedList
    var currentNode = this.head;// As we travel through our LinkedList, this value will change. Starting point can be this.head or tail
    while(currentNode) { // Travel through the LinkedList from Node to Node.
        if(currentNode.value === searchValue) return currentNode.value;
        currentNode = currentNode.next; // It will keep running until it hits tail(null)
    }
    return null;
};


LinkedList.prototype.indexOf = function(value) {
    var indexes = [];
    var currentIndex = 0;
    var currentNode = this.head; //This will be our starting point
    while(currentNode) { // While currentNode is present. This will allow us to travel through our whole LinkedList
        if(currentNode.value === value){
            indexes.push(currentIndex)
        }
        currentNode = currentNode.next; // This will allow us to iterate through every node in our list.
        currentIndex++;
    }
    return indexes;
};

// var myLL = new LinkedList();
// myLL.addToHead(423);
// myLL.addToHead(70);
// myLL.addToHead('hello');
// myLL.addToTail(19);
// myLL.addToTail('world');
// myLL.addToTail(20);
//
// console.log(myLL.search(10));




// var LL = new LinkedList();
// LL.addToHead(1000);
// LL.addToHead(2000);
// LL.addToTail(3000);
//
// console.log(LL.removeHead());


// var myLL =  new LinkedList();
//
// myLL.addToTail(10);
// myLL.addToTail(20);
// myLL.addToTail(30);
//
// myLL.addToHead(100);
//
// console.log(myLL.tail.prev.prev.prev);

// var ll = new LinkedList();
//
// ll.addToHead(100); // Here we are adding one node to our LinkedList. Right now it is both the head and tail node.
// ll.addToHead(200);
// ll.addToHead(300);
// console.log(ll);





// var LL = new LinkedList();
// var node1 = new Node(100, 'node2', null);
// // console.log(LL);
// console.log(node1);



"Why can't jesus eat m&m's?"

They fall through his hands!
