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

// Constructor function

function BST(value){                                                            // Will have a left and right child node
    this.value = value;                                                         // This value will start
    this.left = null;
    this.right = null;
}

///////////Insert Method///////////
// This will take in a value, make a new binary search tree (or node),
// and place that node into our original binary search tree.
///////////Insert Method///////////


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

// console.log(bst.right.left.left);
// console.log(bst.left.right.left);
// console.log(bst.right.right);
