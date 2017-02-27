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
console.log(quint.push(4).push(44).push(11).push(15).size(3));


//////////////////// More Stacks ////////////////////

function Stack() {
    var items = [];

    this.push = function(element){
        items.push(element);
    };
    this.pop = function(){
        return items.pop();
    };
    this.isEmpty = function(){
        return items.length == 0;
    };
    this.peek = function(){
        return items[items.length - 1];
    };
    this.size = function(){
        return items.length;
    };
    this.clear = function(){
        items = [];
    };
    this.print = function(){
        console.log(items.toString());
    };
}

var stack1 = new Stack();
console.log(stack1.isEmpty());
stack1.push(5);
stack1.push(8);
console.log(stack1.peek());
console.log(stack1.size());
console.log(stack1.isEmpty());
stack1.push(12);

console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.peek());
console.log(stack1.push(10));
stack1.print();

//////////////////// More Stacks ////////////////////

var Stack = function(){
    this.top = null;
    this.size = 0;
};

var Node = function(data){
    this.data = data;
    this.previous = null;
};

Stack.prototype.push = function(data){
    var node = var Node(data);

    node.previous = this.top;
    this.top = node;
    this.size += 1;
    return this.top;
};

Stack.prototype.pop = function(){
    temp = this.top;
    this.tope = this.top.previous;
    this.size -= 1;
    return temp;
};



//////////////////// Decimal to Binary ////////////////////

function divideBy2(decNumber){ // Whole num in this case
    var remStack = new Stack(), // Remainder stack is a new isntance of Stack()
        rem, // Setting remainder
        binaryString = ''; // Setting a blank string
    while(decNumber > 0){ //{1}}
        rem = Math.floor(decNumber % 2); //{2}
        remStack.push(rem); //{3}
        decNumber = Math.floor(decNumber / 2); //{4}
}
    while(!remStack.isEmpty()){ //{5}
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}
console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1));
console.log(divideBy2(1000));
