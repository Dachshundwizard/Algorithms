function HashTable(size){ // Size will determine how many buckets we will have
    this.buckets = Array(size); // It defines where the data of our hash table will be stored
    this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null; // If there is no 'next'.
}

HashTable.prototype.hash = function(key) {
    var total = 0; // initiating our 'total' variable
    for(var i = 0; i < key.length; i++){
        total += key.charCodeAt(i); // This will add the numeric value of every character in our string to our total
    }
    var bucket = total % this.numBuckets; // Using modulus operator. We will get a number between 0 and 29. If we devide any nymber by 30, which is how many buckets we currently have, the remainder can only be 0-29
    return bucket;
};

/////////// Insert Method //////////////////////


HashTable.prototype.insert = function(key, value) {
    var index = this.hash(key); // determines what bucket it will go into
    if(!this.buckets[index]) {
        this.buckets[index] = new HashNode(key, value); // If there is nothing in the bucket at the given index, we will make a node and put it in the bucket
    }
    else if(this.buckets[index].key === key){ // Otherwise, check the first node in the bucket
        this.buckets[index].value = value; // It becomes equal to the value we passed in to our method
    }
    else { // if there is a node (or multiple)
        var currentNode = this.buckets[index]; // Starting point initiated, and setting it to first node in bucket.
        while(currentNode.next) { // While there is an other node in the chain
            if(currentNode.next.key === key) {
                currentNode.next.value = value;
                return; // if we have a situation thats udated, we want to stop the rest of the method from running.
            } // Set currentNode to be the next node in the chain
            currentNode = currentNode.next;
        } // While this is not the last node in the chain, continue to travel down through the chain by changing the currentNode to the next node.
        currentNode.next = new HashNode(key, value); // When there is not .next and there is null, our current node variable will be equal to new hash node.
    }
};

var myHT = new HashTable(30); // Defining our HashTable

myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Quinten', 'quinten@gmail.com');
myHT.insert('Mike', 'mike112@gmail.com');
myHT.insert('Issa', 'poooooop@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');
myHT.insert('Dean', 'deanlalalal@gmail.com');
console.log(myHT.buckets); // logging out hash table 
