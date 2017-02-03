function HashTable(size){ // Size will determine how many buckets we will have
    this.buckets = Array(size); // It defines where the data of our hash table will be stored
    this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null; // If there is no 'next'. 
}

var myHT = new HashTable(30);
console.log(myHT);
