////////////////////////////////////////////////////////////
function insertAt(arr, index, val) {
    for (var i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = val;
    return arr;
}
console.log(insertAt([5,4,2,1], 2, 3));
////////////////////////////////////////////////////////////
function swapArrayPairs(arr) {
    for(var i = 0; i < arr.length; i += 2) {
        if(arr[i + 1]) {
            var tmp = arr[i];
            arr[i] = arr[i +1];
            arr[i + 1] = tmp;
        }
    }
    return arr;
}
console.log(swapArrayPairs([4,3,5,1]));
////////////////////////////////////////////////////////////
function removeDuplicates(arr) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == arr[i + 1]) {
            arr[i] = arr[i + 1];
            if(arr[i + 2] == undefined){
                arr.length--;}
            else arr[i + 1] = arr[i + 2];
            }
        }
        return arr;
    }
console.log(removeDuplicates([5,5,4,3,2]));
