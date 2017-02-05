////////////////////////////////////////// BUBBLE SORT //////////////////////////////////////////
////////////////////////////////////////// BUBBLE SORT //////////////////////////////////////////
////////////////////////////////////////// BUBBLE SORT //////////////////////////////////////////

function bubbleSort(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
        for(var j = 1; j<=i; j++){
            if(arr[j-1] > arr[j]){
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
        console.log(arr);
    }
    return arr
}

console.log(bubbleSort([9, 5, 3, 8, 10, 2]));



////////////////////////////////////////// BUBBLE SORT //////////////////////////////////////////
////////////////////////////////////////// BUBBLE SORT //////////////////////////////////////////
////////////////////////////////////////// BUBBLE SORT //////////////////////////////////////////

function bubbleSort(Array) {
    var i, j;
    for (i = Array.length - 1; i >= 0; i--) {
        for (j = 0; j <= i; j++) {
            if (Array[j + 1] < Array[j]) {
                var temp = Array[j];
                Array[j] = Array[j + 1];
                Array[j + 1] = temp;
            }
        }
    }
    return Array;
}
console.log(bubbleSort([9,8,77,33,34,6,123,3]));

////////////////////////////////////////// BUBBLE SORT //////////////////////////////////////////
////////////////////////////////////////// BUBBLE SORT //////////////////////////////////////////
////////////////////////////////////////// BUBBLE SORT //////////////////////////////////////////

/* Psuedocode =

procedure bubbleSort( A : list of sortable items ) defined as:
  do
    swapped := false
    for each i in 0 to length(A) - 2 inclusive do:
      if A[i] > A[i+1] then
        swap( A[i], A[i+1] )
        swapped := true
      end if
    end for
  while swapped
end procedure */


var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function bubbleSort(a){
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

bubbleSort(a);
console.log(a);

////////////////////////////////////////// BUBBLE SORT //////////////////////////////////////////
////////////////////////////////////////// BUBBLE SORT //////////////////////////////////////////
////////////////////////////////////////// BUBBLE SORT //////////////////////////////////////////

function bubble(arr) {
      var len = arr.length;

      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j] > arr[j + 1]) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }

console.log(bubble([1,9,2,3,7,6,4,5,5]));
