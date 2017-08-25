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


///////////Contains Method///////////
// Will tell us is our BST has a given value. If it does contain the value it will return
// True, and if it doesnt, it will return false
///////////Contains Method///////////





BST.prototype.contains = function(value){
    if(value === this.value) return true;
    else if(value < this.value){
        if(!this.left) return false;                                            // Is there a left child node? If there isn't, return false
        else return this.left.contains(value);                                  // We want to run our contains method on this child node
    }
    else if(value > this.value){
        if(!this.right) return false;
        else return this.right.contains(value);
    }
};

console.log(bst.contains(50));
console.log(bst.contains(59));
console.log(bst.contains(15));
