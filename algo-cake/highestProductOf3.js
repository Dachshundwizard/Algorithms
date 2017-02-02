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
    // We're going to start at the 3rd item(index 2)
    var highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
    var lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);

    var highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
    var lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];

    var highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

    // walk through items, starting at index 2
    for(var i = 2; i < arrayOfInts.length; i++){
        var current = arrayOfInts[i];

        highestProductOf3 = Math.max(
            highestProductOf3,
            current * highestProductOf2,
            current * lowestProductOf2
        );

        highestProductOf2 = Math.max(
            highestProductOf2,
            current * highest,
            current * lowest
        );

        lowestProductOf2 = Math.min(
            lowestProductOf2,
            current * highest,
            current * lowest
        );

        highest = Math.max(highest, current);
        lowest = Math.min(lowest, current);
    }
    return highestProductOf3;
}
console.log(highestProductOf3([1,2,3]));
console.log(highestProductOf3([4,3,3,2,2,2,100]));
