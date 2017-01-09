///////////Binary Search Trees///////////

function BST(value){ //  Will have a left and right child node
    this.value = value; // This value will start
    this.left = null;
    this.right = null;
}

///////////Insert Method///////////
/////////// This will take in a value, make a new binary search tree (or node), and place that node into our original binary search tree.
BST.prototype.insert = function(value){
    if(value <= this.value) {
        if(!this.left)this.left = new BST(value);
        else this.left.insert(value);
    }
    else if(value > this.value){
        if(!this.right)this.right = new BST(value);
        else this.right.insert(value);
    }
};

var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log(bst.right.left.left);
console.log(bst.left.right.left);
console.log(bst.right.right);
