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
// A queue follows  FIFO (first in first out) Line at a movie theater

function BST(value) {
    this.value = value;
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

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
    var queue = [this];         // Define a queue, and place our root node into our queue.
    while(queue.length) {       // We then define a while loop, that will continuously run as long as it has length(is not empty)
        var treeNode = queue.shift(); // This will take the first node out of our queue and store it in the variable treeNode
        iteratorFunc(treeNode); // Now we want to run our iterator function on this node that we just shifted out
        if(treeNode.left) queue.push(treeNode.left); // We want to push the children of this node into our queue
        if(treeNode.right) queue.push(treeNode.right);
    }
};

var bst = new BST(50);
bst.insert(30);
bst.insert(35);
bst.insert(50);
bst.insert(22);
bst.insert(3);
bst.insert(75);

function log(node){
    console.log(node.value);
}

bst.breadthFirstTraversal(log);
