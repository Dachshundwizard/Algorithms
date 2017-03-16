// We store the result of expensive function calls (cached) so when we call the same function, it
// and return the same result from the cached result.

var raiseTo100Power = function(base){ // accepts a base value
    raiseTo100Power._cache = raiseTo100Power._cache || {}; // we check if there is a private variable called _cache. if not, we set it to an empty object.

    if(!raiseTo100Power._cache[base]){ // If it does not exist with this base as a property of this object
        console.info("Not found in cache, performing expensive operation and storing in cache...");
        var result; // temp variable result
        result = Math.pow(base,100); // actual function to raise the number (base) to the power of 100
        raiseTo100Power._cache[base] = result; // store the result into the cache[base]
    }
    return raiseTo100Power._cache[base];
}

console.log(raiseTo100Power(100))
console.log(raiseTo100Power(20))
console.log(raiseTo100Power(15))
console.log(raiseTo100Power(100))
console.log(raiseTo100Power(20))
console.log(raiseTo100Power(15))
console.log(raiseTo100Power(1))
