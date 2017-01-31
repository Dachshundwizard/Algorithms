/*                                  # #### ####
                                ### \/#|### |/####
                               ##\/#/ \||/##/_/##/_#
                             ###  \/###|/ \/ # ###
                           ##_\_#\_\## | #/###_/_####
                          ## #### # \ #| /  #### ##/##
                           __#_--###`  |{,###---###-~
                                     \ }{
                                      }}{
                                      }}{
                                      {{}
                                , -=-~{ .-^- _
                                      `}
                                       {

*/

/////////// Depth First Traversal (in order) ///////////
// Our iteratorFunc will simply log nodes out to the console.
// Travel through all of the nodes in our BST and run the iteratorFunc on each node. And it will follow down to the
// end of the branch before going to the next branch. (depth first)
// We will recursively touch every node in order from least to greatest
/////////// Depth First Traversal (in order) ///////////


function BST(value){                                                            // Will have a left and right child node
    this.value = value;                                                         // This value will start
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function(value){
    if(value <= this.value) {
        if(!this.left)this.left = new BST(value);                               // If no left child, set left child = to new BST(value)
        else this.left.insert(value);                                           // If there is a left child, then run the new BST on that left child
    }
    else if(value > this.value){
        if(!this.right)this.right = new BST(value);                             // if there is no right child, this.right is a new BST(value)
        else this.right.insert(value);                                          // Otherwise, if there is a right child, pass in the value to the this.right
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



BST.prototype.depthFirstTraversal = function(iteratorFunc, order){              // 3 possible values that this order perameter could be are
    if(order === 'pre-order') iteratorFunc(this.value);                         // If we want to run this method in 'pre-order' we will have to pass in 'pre-order' as the order perameter
    if(this.left)this.left.depthFirstTraversal(iteratorFunc, order);            // Pre-order, in-order, and post-order
    if(order === 'in-order') iteratorFunc(this.value);
    if(this.right)this.right.depthFirstTraversal(iteratorFunc, order);
    if(order === 'post-order') iteratorFunc(this.value);                        // This code is happening after the left and right children are processed
};

// bst.depthFirstTraversal(log, 'in-order');
// bst.depthFirstTraversal(log, 'pre-order');
bst.depthFirstTraversal(log, 'post-order');

function log(value){
    console.log(value)
};
