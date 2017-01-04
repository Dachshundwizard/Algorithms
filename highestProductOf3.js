// We can use a greedy approach to solve the problem in one pass. At each iteration we keep track of:
// - highestProductOf3
// - highestProductOf2
// - highest
// - lowestProductOf2
// - lowest
//
// When we reach the end, the highestProductOf3 is our answer. We maintain the others because they're necessary for
// keeping the highestProductOf3 up to date as we walk through the array.

function highestProductOf3(arrayOfInts){ // arrayOfInts is what we will pass in through our function
    if(arrayOfInts.length < 3) {
        throw new Error('Must be more than 2 items!');
    }
}
