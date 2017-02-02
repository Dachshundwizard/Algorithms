//mergesort
function mergeSortedArray(arr1, arr2){
    let newArr = [];
    let i = 0;
    let k = 0;
    while(i<arr1.length && k<arr2.length){
        if(arr1[i] < arr2[k]){
            newArr.push(arr1[i]);
            i++;
        }
        else{
            newArr.push(arr2[k]);
            k++
        }
    }
    while(i < arr1.length){
        newArr.push(arr1[i]);
        i++
    }
    while(k < arr2.length){
        newArr.push(arr2[k]);
        k++
    }
    return newArr;
}

let arr1 =[1,30,80];
let arr2 =[60,65,90,100];
let arr3 = [100, 9, 14, 70]
// console.log(mergeSortedArray(arr1,arr2))

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let arr1 = arr.slice(0, Math.floor(arr.length/2));
    let arr2 = arr.slice(Math.floor(arr.length/2), arr.length)
    return mergeSortedArray(mergeSort(arr1), mergeSort(arr2))
}


console.log(mergeSort(arr3));