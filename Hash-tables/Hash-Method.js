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

var myHT = new HashTable(30);

console.log(myHT.hash('Becca'));
