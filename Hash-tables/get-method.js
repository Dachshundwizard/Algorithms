function HashTable(size){
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
};

function HashNode(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null;
};

HashTable.prototype.hash = function(key){
    total = 0;
    for(var i = 0; i < key.length; i++){
        total += key.charCodeAt(i);
    }
    var bucket = total % this.numBuckets;
    return bucket;
};

HashTable.prototype.insert = function(key, value){
    var index = this.hash(key);
    if(!this.buckets[index]){
        this.buckets[index] = new HashNode(key, value);
    }
    else if(this.buckets[index].key === key){
        this.buckets[index].value = value;
    }
    else {
        var currentNode = this.buckets[index];
        while(currentNode.next) {
            if(currentNode.next.key === key){
                currentNode.next.value = value;
                return;
            }
            currentNode = currentNode.next;
        }
        currentNode.next = new HashNode(key, value);
    }
};
/////////// Get Method ///////////
HashTable.prototype.get = function(key) {
    var index = this.hash(key); // Now we know which bucket to look into
    if(!this.buckets[index]) return null;
    else {
        var currentNode = this.buckets[index];
        while(currentNode) {
            if(currentNode.key === key) return currentNode.value;
            currentNode = currentNode.next; // Allows us to travel through every node
        }
        return null; // If we go through the whole chain, and we do not match one, return null
    }
};




var myHT = new HashTable(20); // Defining our HashTable

myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Quinten', 'quinten@gmail.com');
myHT.insert('Mike', 'mike112@gmail.com');
myHT.insert('Issa', 'poooooop@gmail.com');
console.log(myHT.get('Dean'));
console.log(myHT.get('Mike'));
console.log(myHT.get('Quinten'));
