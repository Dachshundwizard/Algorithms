// function popFront(arr){
//                 for (var i = 0; i < arr.length; i++){
//                     arr[i] = arr[i + 1];
//                 }
//                 arr.length -= 1;
//                 console.log(arr);
//                 return arr;
//
//             }
// popFront([1,2,3,4]);

function popFront(arr){
    for(var i = 0; i < arr.length; i++){
    arr.pop([0]);
}
console.log(arr);
return arr;

}
popFront([1,2,3,4]);

            // //Given array, index, and additional value, insert the value into array at given index. You can think of PushFront(arr,val) as equivalent to InsertAt(arr,0,val).
            // function insertAt(arr, index, value){
            //     arr[index] = value;
            //     return arr;
            // }
            // //Given array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of PopFront(arr) as equivalent to RemoveAt(arr,0).
            // function removeAt(arr, index){
            //     var indexvalue = arr[index];
            //     for (var i = index; i < arr.length; i++){
            //         arr[i] = arr[i + 1];
            //     }
            //     arr.length -= 1;
            //     console.log(arr);
            //     return (indexvalue);
            // }
