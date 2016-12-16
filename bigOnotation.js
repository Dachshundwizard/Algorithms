// Constant runtime - Big O Notation: "O (1)"
// The runtime never changes because we are always logging only two values.
// Could be 1 item or 1,000, but this function would still only require one "step".
function log(array){
    console.log(array[0]);
    console.log(array[1]);
}
log([1,2,3,4,5]);
log([1,2,3,4,5,6,7,8,9,10]);

// Linear runtime - Big O notation: "O (n)" "n" is the number of items in the array
// If the array has 10 items, we have to print 10 time. If it has 1,000, we will have to print 1,000.
function logAll(array){
    for(var i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
logAll([1,2,3,4,5]);
logAll([1,2,3,4,5,6,7,8]);
logAll([1,2,3,4,5,6,7,8,9,10]);

// Exponential runtime - Big O notation: "O(n^2)"
//

function addAndLog(array) {
 for (var i = 0; i < array.length; i++) {
   for (var j = 0; j < array.length; j++) {
     console.log(array[i] + array[j]);
   }
 }
}

addAndLog(['A', 'B', 'C']);  // 9 pairs logged out
addAndLog(['A', 'B', 'C', 'D']);  // 16 pairs logged out
addAndLog(['A', 'B', 'C', 'D', 'E']);  // 25 pairs logged out

// Logarithmic runtime - Big O Notation: O (log n)
function binarySearch(array, key) {
    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;

    while (low <= high) {
        mid = Math.floor((low + high) / 2, 10);
        element = array[mid];
        if (element < key) {
            low = mid + 1;
        } else if (element > key) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
