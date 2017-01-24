// quick sort
function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let pivot = arr[0];
    let lower = [];
    let higher = [];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            lower.push(arr[i]);
        }else {
            higher.push(arr[i]);
        }
    }
    lower = quickSort(lower); 
    higher = quickSort(higher);
    arr = lower.concat(pivot, higher);
    return arr
}

let myArr = [4, 17, 90, 1, 5, 11]
console.log(quickSort(myArr));