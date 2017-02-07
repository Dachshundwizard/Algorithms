class sLNode {
    constructor(_key,_val){
        this.key = _key;
        this.val = _val;
        this.next = null;
    }
}
class hashTable {
    constructor(n){
        this.table = [];
        this.length = n;
        this.table.length = n;
        for(var i = 0; i < n;i++){
            this.table[i] = new sLList;
        }
    }
}

class sLList {
    construct(){
        this.head = null;
    }
}

var alphabet = { "A":1 ,"B":2,"C":3,"D":4,"E":5,"F":6,"G":7,"H":8,"I":9,"J":10,"K":11,"L":12,"M":13,"N":14,"O":15,"P":16,"Q":17,"R":18,"S":19,"T":20,"U":21,"V":22,"W":23,"X":24,"Y":25,"Z":26 }

function hash(string) {
    var returnedValue = 0;
    for(var i = 0; i < string.length; i++){
        for(key in alphabet){
            if(string[i] == key){
                returnedValue += alphabet[key];
            }
        }
        return returnedValue
    }

}

hashTable.prototype.add = function(key,value){
    var hashed = hash(key);
    var nodeToAdd = new sLNode(key,value)
    var bucket = hashed % this.length
    if(!this.table[bucket].head){
        this.table[bucket].head = nodeToAdd;
    } else {
        var current = this.table[bucket].head;
        while(current.next){
            if(current.key == nodeToAdd.key){
                current = nodeToAdd;
            }
            current = current.next;
        }
        current.next = nodeToAdd;
    }
    return this;
}

hashTable.prototype.retrieve = function(key){
    var hashed = hash(key);
    var bucket = hashed % this.length;
    if(!this.table[bucket].head){
        this.table[bucket].head = nodeToAdd;
    } else {
        var current = this.table[bucket].head;


        while(current){
            if(current.key == key){
                return current
            }
            current = current.next
        }
        return -1
    }
}


var hashy = new hashTable(3);

console.log(hashy)
hashy.add("CAT",2100)
console.log(hashy.table[0])
console.log(hashy.retrieve("CAT"))
