function stackNode(val){
    this.data = val;
    this.next = null;
}

function stack(){
    this.top = null;

    this.push = function(val){
        var new_node = new stackNode(val);
        new_node.next = this.top;
        this.top = new_node;
        return this;
    };

    this.pop = function(){
        var top_node = this.top;
        this.top = this.top.next;
        return top_node;
    };

    this.get_top = function(){
        return this.top.data;
    };

    this.isEmpty = function(){
        return !this.top;
    };

    this.size = function(){
        var node = this.top;
        var count = 0;
        while(node){
            node = node.next;
            count++;
        }
        return count;
    };

    this.contains = function(val){
        var node = this.top;
        while(node){

            if(node.data === val){
                return true;
            }
            node = node.next;
        }
        return false;
    };
    }

var quint = new stack();
console.log(quint.push(4).push(44).push(11).push(15).contains(3));
